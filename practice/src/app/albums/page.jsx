export default async function Albums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=50");
  const data =await response.json();
  console.log("Data is: ",data)

  return (
    <>
    <div>
      {
        data.map(({id,title})=>(
          <h1 key={id}>Title is: {title}</h1>
        ))

      }
    </div>
    </>
  )
}
