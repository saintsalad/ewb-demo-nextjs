'use client'

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Sign in to your account</h2>

        <button
          onClick={() => signIn("microsoft-entra-id")}
          className="flex w-full justify-center rounded-md bg-blue-600 p-3 text-white hover:bg-blue-700"
        >
          Sign in with Microsoft
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

