import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col gap-y-3 items-center">
        <p className="text-[24px]">The invoice that you are looking for; not found</p>
        <Link
          href="/invoices"
          className="bg-primary-secondary text-white rounded-md cursor-pointer transition-all duration-200 px-5 py-2"
        >
          Go back to invoices page
        </Link>
      </div>
    </div>
  );
}
