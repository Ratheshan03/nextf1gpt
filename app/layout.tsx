import "./global.css";

export const metadata = {
    title: "F1 GPT",
    description: "Formula 1 Grand Prix custom chat gpt agent",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    );   
}

export default RootLayout;