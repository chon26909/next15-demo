'use client';

import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface RoleWrapperProps {
    children: ReactNode;
    requiredRoles: string[]; // เช่น ["member", "admin"]
}

const RoleWrapper: React.FC<RoleWrapperProps> = ({ children, requiredRoles }) => {
    const { data: session } = useSession();
    const userRole = session?.user?.role;

    if (!userRole || !requiredRoles.includes(userRole)) {
        return null; // ไม่แสดงอะไรถ้าบทบาทไม่ตรง
    }

    return <>{children}</>;
};

export default RoleWrapper;
