'use client'
export default function Error({error}) {
  console.dir(error)
  console.log("Digest Value: ",error.digest)
  return (
    <div>
        <h1>Error page</h1>
    </div>
  )
}
