export default async function Albums() {
  const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=10");
  const albums =await albumsResponse.json();
  console.log("A=lbums Data is: ",albums)

  const userResponse=await fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
  const user=await userResponse.json()
  console.log("User Data is: ",user)


  const  todosResponse= await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  const todos=await todosResponse.json()
  console.log("Todos Data is: ",todos)

  return (
    <>
    <div>
       <h1>Albums Detail</h1>
      {
        albums.map(({id,title})=>(
          <div key={id}>
           
            <h1>Title: {title}</h1>
             </div>
        ))

      }
    </div>
    <div className="mt-10">
      <h1 className="text-center text-3xl font-bold mb-5">User Details</h1>
      {
        user.map(({id,name,email})=>(
          <div key={id} className="grid grid-cols-2 gap-5 ">
            <p>Name: {name}</p>
            <p>Email: {email}</p>

          </div>
        ))
      }
    </div>
    </>
  )
}
