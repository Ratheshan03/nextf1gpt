"use client"

import Image from "next/image"
import f1gptlogo from "./assets/AI-logo.png"
import {useChat} from "ai/react";
import {Message} from "ai";
import Bubble from "./components/bubble";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionsRow from "./components/PromptSuggestionsRow";


const Home = () =>{
    const {input, append, isLoading, messages, handleInputChange, handleSubmit} = useChat();

    const noMessages = !messages || messages.length === 0;

    const handlePrompt = (promptText) => {
      const msg: Message = {
        id: crypto.randomUUID(),
        content: promptText,
        role: "user",
      };
      append(msg);
    };

    return (
      <main>
        <Image src={f1gptlogo} alt="F1 GPT Logo" width="250" />
        <section className={noMessages ? "" : "populated"}>
          {noMessages ? (
            <>
              <p className="starter-text">
                The Ultimate place for Formula 1 super fans! Ask F1GPT anything
                about the fantastic world of F1 racing, and it will provide the
                most up-to-date answers. We hope you enjoy!
              </p>
              <br />
              <PromptSuggestionsRow onPromptClick={handlePrompt} />
            </>
          ) : (
            <>
              {messages.map((message, index) => (
                <Bubble key={`message-${index}`} message={message} />
              ))}
              {isLoading && <LoadingBubble />}
            </>
          )}
        </section>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="question-box"
            placeholder="Ask me something..."
            value={input}
            onChange={handleInputChange}
          />
          <input type="submit" value="Send" />
        </form>
      </main>
    );
}

export default Home