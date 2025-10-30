import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface SidebarContextValue {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface SidebarRootProps {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export interface SidebarHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarTitleProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarToggleProps {
  className?: string;
}

export interface SidebarContentProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarGroupProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarItemProps {
  icon?: LucideIcon;
  children: ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface SidebarLabelProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarSeparatorProps {
  className?: string;
}

export interface SidebarFooterProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarUserProps {
  name?: string;
  email?: string;
  avatar?: ReactNode;
  className?: string;
}
