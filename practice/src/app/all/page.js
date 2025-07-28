
export default async function All() {
    const all=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5"),
        fetch("https://jsonplaceholder.typicode.com/albums"),
        // as you wish
        
    ])
    console.log("All :",alls)
  return (
    <div>
      
    </div>
  )
}
