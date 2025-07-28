
// export default async function All() {

//     // Parallel Api Fetching concept or Technique or Method
//     const [post,comment,album]=await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
//         fetch("https://jsonplaceholder.typicode.com/comments?_limit=5"),
//         fetch("https://jsonplaceholder.typicode.com/albums?_limit=5"),
//         // as you wish
        
//     ])
//    const [postData,commentData,albumData]=await Promise.all([post.json(),comment.json(),album.json()])
//     console.log("Post Data: ",postData,"\n","Comment Data: ",commentData,'\n',"AlbumData: ",albumData)
//   return (
//     <div>
      
//     </div>
//   )
// }


// Optimize code

const fetchData=async(url)=>{
    const res=await fetch(url)
    return await res.json()
}
export default function page() {
  return (
    <div>
      
    </div>
  )
}
