'use client'
export default function Error({error,reset}) {
  console.dir(error)
  console.log("Digest Value: ",error.digest)
  return (
    <div>
        <h1>Error page</h1>
        <p>Name:{error.name}</p>
        <p>Message: {error.message}</p> 
        <p>Stack: {error.stack}</p>
        <p>Digest: {error.digest}</p>
        <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-400 cursor-pointer"
      >
        Try Again
      </button>
    </div>
  )
}
