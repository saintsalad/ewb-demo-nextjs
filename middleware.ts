import { auth } from "@/auth"
import { NextResponse } from "next/server"

const protectedRoutes = ["/", "/inquiry"]
const apiAuthPrefix = "/api/auth"
// const authPageRoutes = ["/login", "/signup"]


export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;


    const path = nextUrl.pathname;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isProtectedRoute = protectedRoutes.includes(path)
    // const isAuthPageRoute = authPageRoutes.includes(path)


    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isProtectedRoute && !isLoggedIn) {
       // return NextResponse.redirect(new URL("/login", nextUrl))
    }

    return NextResponse.next();
})


export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
