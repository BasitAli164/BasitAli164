
export default async function All() {
    const [post,comment,album]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5"),
        fetch("https://jsonplaceholder.typicode.com/albums?_limit=5"),
        // as you wish
        
    ])
   

    const [postData,commentData,albumData]=await Promise.all([post.json(),comment.json(),album.json()])
    console.log("Post Data: ",postData,"\n","Comment Data: ",commentData,'\n',"AlbumData: ",albumData)
  return (
    <div>
      
    </div>
  )
}
