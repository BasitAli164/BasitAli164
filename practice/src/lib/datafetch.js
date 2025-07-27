export const fetchData=async function (){
    const resp= await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const data=resp.json()

    return data

}