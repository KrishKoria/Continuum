"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface WorkspaceAvatarProps {
  id: string;
  name: string;
  imageUrl?: string;
  isActive?: boolean;
  hasUnread?: boolean;
  unreadCount?: number;
  onClick?: () => void;
}

export default function WorkspaceAvatar({
  id,
  name,
  imageUrl,
  isActive = false,
  hasUnread = false,
  unreadCount,
  onClick,
}: WorkspaceAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200",
        "hover:rounded-lg",
        isActive
          ? "bg-primary text-primary-foreground rounded-lg"
          : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <Avatar className="h-7 w-7">
        {imageUrl && <AvatarImage src={imageUrl} alt={name} />}
        <AvatarFallback className="text-xs font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>

      {hasUnread && !isActive && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
          {unreadCount !== undefined && unreadCount > 0 ? (
            unreadCount > 99 ? (
              "99+"
            ) : (
              unreadCount
            )
          ) : (
            <span className="h-2 w-2 rounded-full bg-destructive-foreground" />
          )}
        </span>
      )}

      {isActive && (
        <span className="absolute -left-3 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
      )}
    </button>
  );
}
