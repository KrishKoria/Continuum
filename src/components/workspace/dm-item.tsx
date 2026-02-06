"use client";

import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type PresenceStatus = "online" | "away" | "offline";

interface DMItemProps {
  id: string;
  name: string;
  avatarUrl?: string;
  avatarFallback: string;
  presence: PresenceStatus;
  isActive?: boolean;
  hasUnread?: boolean;
  onClick?: () => void;
}

const presenceColors: Record<PresenceStatus, string> = {
  online: "presence-online",
  away: "presence-away",
  offline: "presence-offline",
};

export default function DMItem({
  id,
  name,
  avatarUrl,
  avatarFallback,
  presence,
  isActive = false,
  hasUnread = false,
  onClick,
}: DMItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 w-full py-1.5 px-2 rounded hover-subtle",
        isActive && "channel-active"
      )}
      aria-label={`Direct message with ${name}`}
      aria-current={isActive ? "page" : undefined}
    >
      <div className="relative">
        <Avatar className="size-7">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <span
          className={cn(
            "presence-dot absolute bottom-0 right-0 border-2 border-background",
            presenceColors[presence]
          )}
          aria-label={`${presence} status`}
        />
      </div>

      <span
        className={cn(
          "text-sm truncate flex-1 text-left",
          hasUnread && "font-semibold"
        )}
      >
        {name}
      </span>

      {hasUnread && (
        <span className="unread-dot shrink-0" aria-label="Unread messages" />
      )}
    </button>
  );
}
