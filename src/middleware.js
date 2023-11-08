// export {default} from 'next-auth/middleware'
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const {pathname,origin} = req.nextUrl;
    const {token} = req.nextauth;
    if(pathname.startsWith('/dashboard') && token?.user?.role !== 'admin' ){
        return new NextResponse("You are not authorized")
    }
  },
  {
    callbacks: {
      authorized: ({ token }) =>{
        console.log(!!token );
        return !!token
      }
    },
  }
)
console.log("middleware");
export const config = { matcher: ["/profile/:path*", "/protected/:path*", "/dashboard/:path*"] }