import { Parser } from "html-to-react";

export const toReactElement = (html) => Parser().parse(html);
