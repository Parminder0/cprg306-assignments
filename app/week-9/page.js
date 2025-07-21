"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-6 text-center">
      {!user ? (
        <>
          <h1 className="text-2xl mb-4">Please Log In</h1>
          <button
            onClick={gitHubSignIn}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link
            href="/week-9/shopping-list"
            className="text-blue-500 underline block mb-4"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </>
      )}
    </main>
  );
}
