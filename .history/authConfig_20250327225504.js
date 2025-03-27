export const authConfig = {
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isHomePage = request.nextUrl.pathname === '/';
      const isPublicRoute = isHomePage || request.nextUrl.pathname === '/login';

      // Rule 1: Block non-logged-in users from any non-public routes
      if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      // Rule 2: Redirect logged-in users away from home to dashboard
      if (isLoggedIn && isHomePage) {
        return Response.redirect(new URL('/dashboard', request.nextUrl));
      }

      // Allow access in all other cases
      return true;
    },
  },
  providers: [], // Add your authentication providers here
};