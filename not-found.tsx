import Link from "next/link";

export default function Notfound(){
    return(
        <div className="bg-cyan-500 h-screen pt-56 ">
        <h1 className="ml-96 text-4xl font-extrabold text-white">sorry this page was not found</h1> <br />
        <Link href="/" className="ml-96 text-4xl font-extrabold text-white underline">Go back</Link>

        </div>
    )
        


}