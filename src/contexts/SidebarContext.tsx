/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, createContext } from 'react';
type SidebarContext = {
  sidebarToggle: unknown;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider: FC = ({ children }: any) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
