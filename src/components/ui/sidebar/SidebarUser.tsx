import { User } from 'lucide-react';
import { useSidebar } from './SidebarContext';
import type { SidebarUserProps } from './types';

export const SidebarUser: React.FC<SidebarUserProps> = ({
    name,
    email,
    avatar,
    className = ''
}) => {
    const { isOpen } = useSidebar();

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                {avatar || <User size={20} />}
            </div>
            <div
                className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                    }`}
            >
                {name && <p className="font-semibold text-sm">{name}</p>}
                {email && <p className="text-gray-400 text-xs">{email}</p>}
            </div>
        </div>
    );
};
