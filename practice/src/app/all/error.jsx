"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  console.dir(error);
  console.log("Digest Value: ", error.digest);
  const router = useRouter();
  return (
    <div>
      <h1>Error page</h1>
      <p>Name:{error.name}</p>
      <p>Message: {error.message}</p>
      <p>Stack: {error.stack}</p>
      <p>Digest: {error.digest}</p>
      <button
        onClick={() => {
         startTransition(()=>{ // startTransition help to refresh and get data from server component
           reset();
          router.refresh() // this one use to refresh
         })

        }}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-400 cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
