import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";

export const toMarkdownString = (value: string) => {
  return draftToMarkdown(JSON.parse(value), {
    escapeMarkdownCharacters: false,
  });
};

export const toDraftRaw = (value: string) => {
  return markdownToDraft(JSON.parse(value), {
    escapeMarkdownCharacters: true,
  });
};
