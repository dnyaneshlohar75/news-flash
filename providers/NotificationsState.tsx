import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Type = "LIKE" | "COMMENT";

export type Notification = {
  notificationId: string;
  userId: string;
  type: Type;
  title: string;
  time: string;
  articleId: string;
};

type State = {
  appendNotifications: (newNotifications: Notification[]) => void;
  notifications: Notification[];
};

export const useNotifications = create<State>()(
  persist(
    (set) => ({
      notifications: [
        {
          notificationId: "1",
          title: "I am first notfication",
          time: "",
          type: "LIKE",
          userId: "2",
          articleId: "4"
        },
      ],

      appendNotifications: (newNotifications: Notification[]) => {
        set((state) => ({
          notifications: [
            ...state.notifications,
            ...newNotifications,
          ],
        }));
      },
    }),
    { name: "notification-store" }
  )
);
