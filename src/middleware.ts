import { withAuth } from 'next-auth/middleware';

export default withAuth({
    pages: {
        signIn: '/login', // Redirect ไปหน้า login ถ้าไม่ได้ล็อกอิน
    },
});

export const config = {
    matcher: ['/((?!api|_next|static|login|favicon.ico|$).*)'],
};
