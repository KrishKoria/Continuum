"use client";

import * as React from "react";
import { Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChannelItem from "./channel-item";
import DMItem from "./dm-item";
import SidebarSection from "./sidebar-section";

const channels = [
  { id: "1", name: "general", hasUnread: true, unreadCount: 3 },
  { id: "2", name: "announcements", hasUnread: false },
  { id: "3", name: "random", hasUnread: true },
  { id: "4", name: "engineering", hasUnread: false },
  { id: "5", name: "design", hasUnread: false },
];

const directMessages = [
  {
    id: "1",
    name: "Sarah Chen",
    avatarFallback: "SC",
    presence: "online" as const,
    hasUnread: true,
  },
  {
    id: "2",
    name: "Alex Rivera",
    avatarFallback: "AR",
    presence: "away" as const,
    hasUnread: false,
  },
  {
    id: "3",
    name: "Jordan Kim",
    avatarFallback: "JK",
    presence: "online" as const,
    hasUnread: false,
  },
  {
    id: "4",
    name: "Morgan Blake",
    avatarFallback: "MB",
    presence: "offline" as const,
    hasUnread: false,
  },
];

export default function ChannelSidebar() {
  const [activeChannelId, setActiveChannelId] = React.useState("1");
  const [activeDMId, setActiveDMId] = React.useState<string | null>(null);

  const handleChannelClick = (channelId: string) => {
    setActiveChannelId(channelId);
    setActiveDMId(null);
  };

  const handleDMClick = (dmId: string) => {
    setActiveDMId(dmId);
    setActiveChannelId("");
  };

  return (
    <aside className="flex flex-col w-60 bg-background border-r border-border">
      {/* Header */}
      <div className="flex items-center justify-between h-12 px-3 border-b border-border shrink-0">
        <button
          type="button"
          className="flex items-center gap-1.5 hover:bg-muted rounded px-2 py-1 transition-colors"
          aria-label="Workspace menu"
        >
          <span className="text-sm font-semibold truncate">Continuum Team</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto py-3">
        {/* Channels Section */}
        <SidebarSection
          title="Channels"
          action={
            <Button
              variant="ghost"
              size="icon"
              className="size-5 hover:bg-background/80"
              aria-label="Add channel"
            >
              <Plus className="size-3.5" />
            </Button>
          }
        >
          {channels.map((channel) => (
            <ChannelItem
              key={channel.id}
              id={channel.id}
              name={channel.name}
              hasUnread={channel.hasUnread}
              unreadCount={channel.unreadCount}
              isActive={activeChannelId === channel.id}
              onClick={() => handleChannelClick(channel.id)}
            />
          ))}
        </SidebarSection>

        {/* Direct Messages Section */}
        <div className="mt-4">
          <SidebarSection
            title="Direct Messages"
            action={
              <Button
                variant="ghost"
                size="icon"
                className="size-5 hover:bg-background/80"
                aria-label="New direct message"
              >
                <Plus className="size-3.5" />
              </Button>
            }
          >
            {directMessages.map((dm) => (
              <DMItem
                key={dm.id}
                id={dm.id}
                name={dm.name}
                avatarFallback={dm.avatarFallback}
                presence={dm.presence}
                hasUnread={dm.hasUnread}
                isActive={activeDMId === dm.id}
                onClick={() => handleDMClick(dm.id)}
              />
            ))}
          </SidebarSection>
        </div>
      </div>
    </aside>
  );
}
