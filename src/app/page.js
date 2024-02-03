import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="bg-yellow-500 p-10 flex max-md:flex-col max-md:text-center justify-center text-2xl font-semibold">
        <li className="hover:bg-lime-900 hover:text-gray-100 py-3 px-4 rounded ">
           <Link href='/addschool'>AddSchool Item</Link>
        </li>
        <li className="hover:bg-lime-900 hover:text-gray-100 py-3 px-4 rounded">
           <Link href='/showschool'>ShowSchool Item</Link>
        </li>
        
      </ul>
    </main>
  );
}
