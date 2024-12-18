import { create } from "zustand";

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage],
    })),
}));

export default useMessageStore;
