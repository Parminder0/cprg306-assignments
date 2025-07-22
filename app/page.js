export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        CPRG 306 Assignments
      </h1>

      <ul className="mb-8 text-left text-blue-800 space-y-1 list-disc list-inside">
        <li><a href="/week-1" className="hover:underline">Week 1</a></li>
        <li><a href="/week-2" className="hover:underline">Week 2</a></li>
        <li><a href="/week-3" className="hover:underline">Week 3</a></li>
        <li><a href="/week-4" className="hover:underline">Week 4</a></li>
        <li><a href="/week-5" className="hover:underline">Week 5</a></li>
        <li><a href="/week-6" className="hover:underline">Week 6</a></li>
        <li><a href="/week-7" className="hover:underline">Week 7</a></li>
        <li><a href="/week-8" className="hover:underline">Week 8</a></li>
      </ul>

      <div className="space-y-4">
        <a href="/week-9" className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
          Week 9 
        </a>
        <a href="/week-10" className="block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow">
          Week 10
        </a>
      </div>
    </main>
  );
}
