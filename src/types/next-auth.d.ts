import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            role?: string; // เพิ่ม field role หรือ field อื่น ๆ ที่คุณต้องการ
        };
    }
}
