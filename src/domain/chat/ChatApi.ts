export type Subscription = string;
export interface ChatMessage {
  text: string;
}

export interface OnChatMessageReceived {
  (messages: ChatMessage[]): void;
}

export interface ChatApi {
  subscribe(callback: OnChatMessageReceived): Subscription;
  unsubscribe(sub: Subscription): void;
}
