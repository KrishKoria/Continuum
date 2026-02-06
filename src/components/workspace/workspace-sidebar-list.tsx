"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import WorkspaceAvatar from "./workspace-avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const workspaces = [
  { id: "1", name: "Continuum Team", imageUrl: undefined, hasUnread: false },
  {
    id: "2",
    name: "Acme Corp",
    imageUrl: undefined,
    hasUnread: true,
    unreadCount: 5,
  },
  { id: "3", name: "Side Project", imageUrl: undefined, hasUnread: true },
  { id: "4", name: "Friends", imageUrl: undefined, hasUnread: false },
];

export default function WorkspaceSidebarList() {
  const [activeWorkspaceId, setActiveWorkspaceId] = useState("1");

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-2 w-full">
        {workspaces.map((ws) => (
          <Tooltip key={ws.id}>
            <TooltipTrigger asChild>
              <div>
                <WorkspaceAvatar
                  id={ws.id}
                  name={ws.name}
                  imageUrl={ws.imageUrl}
                  isActive={activeWorkspaceId === ws.id}
                  hasUnread={ws.hasUnread}
                  unreadCount={ws.unreadCount}
                  onClick={() => setActiveWorkspaceId(ws.id)}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{ws.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator className="w-8 my-1" />

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-dashed border-border text-muted-foreground transition-all hover:border-muted-foreground hover:bg-muted/50"
              onClick={() => console.log("Add workspace")}
            >
              <Plus className="size-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Add workspace</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
