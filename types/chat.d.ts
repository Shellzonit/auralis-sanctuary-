export type ChatMessage = {
  id: string;
  text: string;
  author?: string;
  timestamp: number;
  parentId?: string;
  threadId: string;
};
