import Link from "next/link"
export default function NotFount() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="text-8xl font-bold">...Not Found...</h1>
         <div>
            <Link className="px-10 py-5 rounded-lg bg-amber-400 font-bold text-xl mx-5 cursor-pointer hover:bg-amber-700 transition duration-700 delay-100 " href={"/"}>Go to Home</Link>
        </div>
      
    </div>
  )
}
