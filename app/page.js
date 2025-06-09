import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">CPRG 306 Assignments</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/week-1" className="text-blue-500 hover:underline">Week 1</Link></li>
        <li><Link href="/week-2" className="text-blue-500 hover:underline">Week 2</Link></li>
        <li><Link href="/week-3" className="text-blue-500 hover:underline">Week 3</Link></li>
        <li><Link href="/week-4" className="text-blue-500 hover:underline">Week 4</Link></li>
      </ul>
    </main>
  );
}
