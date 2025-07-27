export default async function Albums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = response.json();

  return <div></div>;
}
