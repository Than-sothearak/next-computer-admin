export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      const isOnHome = request.nextUrl.pathname === '/';
      const isOnPublicRoute = isOnHome || request.nextUrl.pathname === '/login'; // Add other public routes if needed

      // 1. Protect dashboard routes
      if (isOnDashboard) {
        return isLoggedIn; // Will redirect to login page if not logged in
      }

      // 2. Redirect logged-in users from non-dashboard pages (except home)
      if (isLoggedIn && !isOnDashboard && !isOnHome) {
        return Response.redirect(new URL('/dashboard', request.nextUrl));
      }

      // 3. Block non-logged-in users from non-public routes
      if (!isLoggedIn && !isOnPublicRoute) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
  providers: [],
};