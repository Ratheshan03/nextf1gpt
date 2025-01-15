import { DataAPIClient} from '@datastax/astra-db-ts'
import {PupperteerWebBaseLoader} from "langchain/document_loaders/web/puppeteer";
import OpenAI from "openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "dotenv/config";


