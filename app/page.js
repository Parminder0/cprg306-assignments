"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">CPRG 306 Assignments</h1>
      <ul className="space-y-2 list-disc list-inside">
        <li>
          <Link href="/week-1">
            <span className="text-blue-500 hover:underline">Week 1</span>
          </Link>
        </li>
        <li>
          <Link href="/week-2">
            <span className="text-blue-500 hover:underline">Week 2</span>
          </Link>
        </li>
        <li>
          <Link href="/week-3">
            <span className="text-blue-500 hover:underline">Week 3</span>
          </Link>
        </li>
        <li>
          <Link href="/week-4">
            <span className="text-blue-500 hover:underline">Week 4</span>
          </Link>
        </li>
        <li>
          <Link href="/week-5">
            <span className="text-blue-500 hover:underline">Week 5</span>
          </Link>
        </li>
        <li>
          <Link href="/week-6">
            <span className="text-blue-500 hover:underline">Week 6</span>
          </Link>
        </li>
        <li>
          <Link href="/week-7">
            <span className="text-blue-500 hover:underline">Week 7</span>
          </Link>
        </li>
        <li>
          <Link href="/week-8">
            <span className="text-blue-500 hover:underline">Week 8</span>
          </Link>
        </li>
        <a
  href="/week-9"
  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
>
  Go to Week 9 Assignment
</a>

      </ul>
    </main>
  );
}
