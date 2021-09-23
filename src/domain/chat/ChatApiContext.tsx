import React, { useContext } from 'react';
import { ChatApi } from '.';

const ChatApiContext = React.createContext<ChatApi | null>(null);

export interface ChatApiProviderProps {
  api: ChatApi | null;
}

export const ChatApiProvider: React.FC<ChatApiProviderProps> = ({ children, api }) => {
  return <ChatApiContext.Provider value={api}>{children}</ChatApiContext.Provider>;
};

export function useChatApi(): ChatApi {
  return useContext(ChatApiContext)!;
}
