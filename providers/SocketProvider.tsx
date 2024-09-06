"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface SocketContextInteface {
  sendMessage: (msg: string) => any;
  likedPost: (userId: string, articleId: string) => any;
}

const SocketContext = createContext<SocketContextInteface | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);

  if(!state) {
    throw new Error('State is undefined');
  }

  return state;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { user } = useKindeBrowserClient();

  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const _socket = io(
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"
    );

    setSocket(_socket);

    _socket.emit("user_details", user);

    _socket.on("welcome-message", (msg: string) => {
      console.log("Socket Server Message:", msg);
    });

    _socket.on("last_seen_event", (data) => {
      console.log(data);
    });

    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState === "visible") {
        console.log("Visible");
        _socket.emit("unload_window", user);
      } else {
        console.log("Invisible");
        _socket.emit("load_window", user);
      }
    });

    return () => {
      _socket.disconnect();
      _socket.off("welcome-message");
      _socket.off("last_seen_event");
    };
  }, [io, user]);

  const sendMessage: SocketContextInteface["sendMessage"] = useCallback((msg) => {
      console.log("send message -", msg);
    }, []);

  const likedPost: SocketContextInteface['likedPost'] = useCallback((userId: string, articleId: string) => {

    if(!socket) {
      return;
    }

    socket.emit('event:like_post', { userId, articleId });
  }, [socket]);

  return (
    <SocketContext.Provider value={{ sendMessage, likedPost }}>
      {children}
    </SocketContext.Provider>
  );
};
