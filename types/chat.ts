export type ChatMessage = {
  id: string;
  text: string;
  author?: string;
  timestamp: number;
  threadId: string;
  parentId?: string | null;
};
