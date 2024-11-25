'use client';

import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface LevelWrapperProps {
    children: ReactNode;
    requiredLevels: string[]; // เช่น ["Gold", "Platinum"]
}

const LevelWrapper: React.FC<LevelWrapperProps> = ({ children, requiredLevels }) => {
    const { data: session } = useSession();
    const userLevel = session?.user?.level;

    if (!userLevel || !requiredLevels.includes(userLevel)) {
        return null; // ไม่แสดงอะไรถ้าระดับสิทธิ์ไม่ตรง
    }

    return <>{children}</>;
};

export default LevelWrapper;
