import React, { useEffect, useState } from 'react';
import { ChatMessage, useChatApi } from '../../domain/chat';

export interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
  const api = useChatApi();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    const sub = api.subscribe((_messages) => {
      setMessages(_messages);
    });
    return () => {
      api.unsubscribe(sub);
    };
  }, [api]);

  return (
    <div>
      {messages.map((msg, i) => (
        <span key={i}>{msg.text}</span>
      ))}
    </div>
  );
};
