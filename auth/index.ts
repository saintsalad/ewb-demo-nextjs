
import NextAuth from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [MicrosoftEntraID
        ({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_SECRET,
            issuer: `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_ENTRA_TENANT_ID}/v2.0`,
            // issuer: `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_ENTRA_TENANT_ID}/v2.0`,
        })
    ],
})