import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col gap-y-3 items-center">
        <p className="text-[24px]">The page that you are looking for; not found</p>
        <Link href="/dashboard" className="bg-primary-secondary text-white rounded-md cursor-pointer transition-all duration-200 px-5 py-2">Go back to home page</Link>
      </div>
    </div>
  );
}

