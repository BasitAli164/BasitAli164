
export default async function All() {
    const all=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5"),
        fetch("https://jsonplaceholder.typicode.com/albums"),
        // as you wish
        
    ])
    // const data=await all.json()
    console.log("All :",all)
  return (
    <div>
      
    </div>
  )
}
