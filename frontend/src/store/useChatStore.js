import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";
import { Socket } from "socket.io-client";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessageLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessageLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data.messages });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isMessageLoading: false });
        }
    }, 

    sendMessage: async (messageData) => {
    const { selectedUser } = get();

    try {
        const res = await axiosInstance.post(
            `/messages/send/${selectedUser._id}`,
            messageData
        );

        const newMessage = res.data;

        // SAFE UPDATE: prevents "messages is not iterable"
        set((state) => ({
            messages: [...(state.messages || []), newMessage]
        }));

    } catch (error) {
        console.error("SEND MESSAGE ERROR: ", error);
        toast.error(error.response?.data?.message || "Failed to send message");
    }
},

    subscribeToMessages: () => {
        const { selectedUser } = get()
        if(!selectedUser) return;

        const socket = useAuthStore.getState().socket;
      
        // todo: optimize this later
        socket.on("newMessage", (newMessage) => {
            set ({
                messages: [...get().messages, newMessage],
            });
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },


    //* query in vid said here (selecteduser) is an argument ask wat? 
    setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
