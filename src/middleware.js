export {default} from 'next-auth/middleware'
console.log("middleware");
export const config = { matcher: ["/profile/:path*", "/protected/:path*", "/dashboard/:path*"] }