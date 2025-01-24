import Link from "next/link";

export default function NotFound() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl mb-6">404 - Oldal nem található</h1>
            <Link 
                href="/" 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Vissza a főoldalra
            </Link>
        </div>
     );
}