import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user?: {
            id?: string;
            role?: 'member' | 'admin'; // ประเภทผู้ใช้
            level?: 'Silver' | 'Gold' | 'Platinum'; // ระดับสิทธิ์
            authToken: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultUser {
        role?: 'member' | 'admin'; // ประเภทผู้ใช้
        level?: 'Silver' | 'Gold' | 'Platinum'; // ระดับสิทธิ์
        authToken: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role?: 'member' | 'admin'; // ประเภทผู้ใช้
        level?: 'Silver' | 'Gold' | 'Platinum'; // ระดับสิทธิ์
        authToken: string;
    }
}
