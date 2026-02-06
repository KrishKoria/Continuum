"use client";

import { Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChannelItemProps {
  id: string;
  name: string;
  isActive?: boolean;
  hasUnread?: boolean;
  unreadCount?: number;
  onClick?: () => void;
}

export default function ChannelItem({
  id,
  name,
  isActive = false,
  hasUnread = false,
  unreadCount,
  onClick,
}: ChannelItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 h-8 py-1.5 px-2 rounded text-sm w-full",
        "hover-subtle",
        isActive && "channel-active",
        hasUnread && !isActive && "font-semibold text-foreground",
        !hasUnread && !isActive && "text-muted-foreground"
      )}
      aria-current={isActive ? "page" : undefined}
      aria-label={`${name} channel${hasUnread ? ` (${unreadCount || ""} unread)` : ""}`}
    >
      <Hash className="size-4 text-muted-foreground shrink-0" aria-hidden="true" />
      <span className="truncate flex-1 text-left">{name}</span>

      {hasUnread && !isActive && (
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="unread-dot" aria-hidden="true" />
          {unreadCount !== undefined && unreadCount > 0 && (
            <span className="text-xs bg-unread/10 text-unread rounded-sm px-1.5 py-0.5 font-semibold tabular-nums">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </div>
      )}
    </button>
  );
}
