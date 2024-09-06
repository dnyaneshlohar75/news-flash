"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Badge, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import { LuBell } from "react-icons/lu";
import { useNotifications } from "@/providers/NotificationsState";

export default function Notification() {
  const [ref, inView] = useInView();
  const { notifications } = useNotifications();

  React.useEffect(() => {
    if (inView) {
      console.log("You viewed notifications..");
    }
  }, [inView]);

  return (
    <Dropdown radius="sm" shadow="sm" placement="bottom-end" size="lg">
      <DropdownTrigger>
        <Badge
          color="danger"
          size="sm"
          content={notifications.length === 0 ? "" : notifications.length}
          className="cursor-pointer"
          shape="circle"
        >
          <LuBell size={22} />
        </Badge>
      </DropdownTrigger>

      <DropdownMenu items={notifications} ref={ref}>

        {notifications &&
          notifications.map((notification) => (
            <DropdownItem key={notification.notificationId}>
              <h1 className="font-semibold text-sm">{notification.title}</h1>
              <p className="text-sm">
                {`${notification.userId} ${notification.type.toLowerCase()} ${
                  notification.articleId
                }`}
              </p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </DropdownItem>
          ))}

      </DropdownMenu>
    </Dropdown>
  );
}