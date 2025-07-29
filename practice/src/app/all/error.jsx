'use client'
export default function Error({error}) {
  console.dir(error)
  console.log("Digest Value: ",error.digest)
  return (
    <div>
        <h1>Error page</h1>
        <p>Name:{error.name}</p>
        <p>Message: {error.message}</p>
    </div>
  )
}
