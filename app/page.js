import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-tertiary text-primary items-center justify-center h-screen gap-11">
  
    <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Icon */}
      <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white p-3 rounded-xl shadow-md">
        <svg
          className="w-11 h-11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
          />
        </svg>
      </div>

      {/* Text */}
      <div>
        <h1 className="text-4xl font-extrabold text-primary leading-tight tracking-tight">
          ManageEase
        </h1>
        <p className="text-sm text-gray-500 tracking-wide">All-in-One Management System</p>
      </div>
    </div>
 
     <div>
      <Link href="/dashboard" className="mt-10 px-6 py-3 bg-primary text-tertiary rounded-lg hover:bg-secondary transition-colors">
        Go to Dashboard
      </Link>
     </div>
      
    </div>
  );
}
