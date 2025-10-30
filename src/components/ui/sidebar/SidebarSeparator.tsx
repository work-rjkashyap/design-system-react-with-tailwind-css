import type { SidebarSeparatorProps } from './types';

export const SidebarSeparator: React.FC<SidebarSeparatorProps> = ({
    className = ''
}) => {
    return <div className={`my-4 border-t border-gray-700 ${className}`} />;
};
