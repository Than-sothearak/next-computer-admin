export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.isAdmin; // Check if the user is an admin
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        return isLoggedIn; // Protect dashboard
      }
      if (isOnDashboard && (!isLoggedIn || !isAdmin)) {
        return Response.redirect(new URL('/', request.nextUrl)); // Redirect to home page
      }
      return true; // Allow home and other public routes
    },
  },
  providers: [], // Add providers with an empty array for now
};