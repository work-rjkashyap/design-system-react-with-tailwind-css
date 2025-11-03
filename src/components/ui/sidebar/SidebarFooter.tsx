import type { SidebarFooterProps } from './types';

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={`p-4 border-t border-sidebar-border ${className}`}>
            {children}
        </div>
    );
};
