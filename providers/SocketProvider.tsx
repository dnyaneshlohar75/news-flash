"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface SocketContextInteface {
  sendMessage: (msg: string) => any;
}

interface userProps {
  id: string;
    email: string | null;
    given_name: string | null;
    family_name: string | null;
    picture: string | null; 
}

const SocketContext = createContext<SocketContextInteface | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({
  children,
}) => {
  
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    
    const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001");

    socket.emit("user_details", user);

    socket.on("welcome-message", (msg: string) => {
      console.log("Socket Server Message:", msg);
    })

    socket.on('last_seen_event', data => {
      console.log(data)
    })


    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState === "visible") {
        console.log("Visible")
        socket.emit('unload_window', user);
      } else {
        console.log("Invisible")
        socket.emit('load_window', user);
      }
    });

    return () => {
      socket.disconnect();
      socket.off("welcome-message");
      socket.off('last_seen_event');
    };
  }, [io, user]);

  const sendMessage: SocketContextInteface["sendMessage"] = useCallback(
    (msg) => {
      console.log("send message -", msg);
    },
    []);

  return (
    <SocketContext.Provider
      value={{ sendMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
};
