import WorkspaceSidebarList from "@/components/workspace/workspace-sidebar-list";
import ChannelSidebar from "@/components/workspace/channel-sidebar";
import React from "react";

function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen">
      <div className="flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border">
        <WorkspaceSidebarList />
      </div>
      <ChannelSidebar />
      <div className="flex-1 bg-background">
        {children}
      </div>
    </div>
  );
}

export default WorkspaceLayout;
