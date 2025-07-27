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
       <h2 className="text-3xl text-center font-bold ">Albums Detail</h2>
      {
        albums.map(({id,title})=>(
          <div key={id}>
           
            <h1 className="text-justify">Title: {title}</h1>
             </div>
        ))

      }
    </div>
    <div className="mt-10">
      <h2 className="text-center text-3xl font-bold mb-5">User Details</h2>
      {
        user.map(({id,name,email})=>(
          <div key={id} className="grid grid-cols-2 gap-5 ">
            <p>Name: {name}</p>
            <p>Email: {email}</p>

          </div>
        ))
      }
    </div>

    <div>
      <h2 className="text-3xl font-bold text-center mt-5
      ">Todos Detail</h2>
      {
        todos.map(({id,title, completed})=>(
          <div key={id} className="grid grid-cols-2 gap-5">
            <p>Title: {title}</p>
            <p>Complete: {completed}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}
