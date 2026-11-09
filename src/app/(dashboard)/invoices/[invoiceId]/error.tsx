"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-y-2">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        className="bg-primary-secondary text-white rounded-md cursor-pointer transition-all duration-200 px-5 py-2 hover:bg-primary-secondary"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
