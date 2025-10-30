import { SidebarRoot } from './SidebarRoot';
import { SidebarHeader } from './SidebarHeader';
import { SidebarTitle } from './SidebarTitle';
import { SidebarToggle } from './SidebarToggle';
import { SidebarContent } from './SidebarContent';
import { SidebarGroup } from './SidebarGroup';
import { SidebarItem } from './SidebarItem';
import { SidebarLabel } from './SidebarLabel';
import { SidebarSeparator } from './SidebarSeparator';
import { SidebarFooter } from './SidebarFooter';
import { SidebarUser } from './SidebarUser';

export const Sidebar = {
  Root: SidebarRoot,
  Header: SidebarHeader,
  Title: SidebarTitle,
  Toggle: SidebarToggle,
  Content: SidebarContent,
  Group: SidebarGroup,
  Item: SidebarItem,
  Label: SidebarLabel,
  Separator: SidebarSeparator,
  Footer: SidebarFooter,
  User: SidebarUser,
};

// Export types
export type {
  SidebarContextValue,
  SidebarRootProps,
  SidebarHeaderProps,
  SidebarTitleProps,
  SidebarToggleProps,
  SidebarContentProps,
  SidebarGroupProps,
  SidebarItemProps,
  SidebarLabelProps,
  SidebarSeparatorProps,
  SidebarFooterProps,
  SidebarUserProps,
} from './types';

// Export hook
export { useSidebar } from './SidebarContext';
