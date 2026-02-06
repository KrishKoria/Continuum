"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  action?: React.ReactNode;
}

export default function SidebarSection({
  title,
  children,
  defaultOpen = true,
  action,
}: SidebarSectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="px-2">
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CollapsibleTrigger className="flex h-8 w-full items-center justify-between rounded hover:bg-muted/50 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <ChevronRight
              className={cn(
                "size-3.5 text-muted-foreground transition-transform duration-200",
                isOpen && "rotate-90"
              )}
            />
            <span className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground">
              {title}
            </span>
          </div>
          {action && (
            <div
              className={cn(
                "transition-opacity duration-150",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {action}
            </div>
          )}
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-0.5 flex flex-col">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
