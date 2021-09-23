import React, { useEffect, useState } from 'react';

type Subscription = string;
interface ChatMessage {
  text: string;
}

interface OnChatMessageReceived {
  (messages: ChatMessage[]): void;
}

interface ChatApi {
  subscribe(callback: OnChatMessageReceived): Subscription;
  unsubscribe(sub: Subscription): void;
}

interface ChatProps {
  api: ChatApi;
}

const Chat: React.FC<ChatProps> = ({ api }) => {

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    const sub = api.subscribe((_messages) => {
      setMessages(_messages);
    });
    return () => {
      api.unsubscribe(sub);
    }
  }, [api]);

  return <div>
    {
      messages.map((msg, i) => <span key={i}>{msg.text}</span>)
    }
  </div>

};