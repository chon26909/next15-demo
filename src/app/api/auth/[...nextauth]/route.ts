import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // ตรวจสอบข้อมูลผู้ใช้
                if (
                    credentials?.email === 'user@example.com' &&
                    credentials?.password === 'password'
                ) {
                    return { id: '1', name: 'John Doe', email: 'user@example.com' };
                }
                return null; // ถ้าไม่ผ่าน
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// Export named HTTP methods
export { handler as GET, handler as POST };
