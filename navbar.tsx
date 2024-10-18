import Link from 'next/link';

export default function Export(){
  return (
    <div>
      <header className='h-16
                        w-100
                        bg-cyan-300
                        flex
                        justify-between
                        items-center
                        shadow-lg
                        shadow-gray-600
                        px-10
                        '>
    <div className="webname">
      <h1 className='text-black
                         font-bold
                         text-4xl	
                         '>
                        <span>L</span>et's <span>L</span>earn
    </h1>
      </div>

        <nav>
          <ul className='flex'>
            <li className='ml-8
                        text-black
                        font-bold 
                        hover:text-gray-700
                          '><Link href="/" >Home</Link>
            </li>
            <li className='ml-8
                        text-black 
                        font-bold 
                        hover:text-gray-700
                         '><Link href="/findjobs">Find Jobs</Link>
            </li>
            <li className='ml-8 
                        text-black 
                        font-bold 
                        hover:text-gray-700
                        '><Link href="/findoffer">Find Offers</Link>
            </li>
            <li className='ml-8
                        text-black
                        font-bold 
                        hover:text-gray-700
                        '><Link href="/partner">Becom Partner</Link>
            </li>
            <li className='ml-8
                        text-black
                        font-bold  
                        hover:text-gray-700
                        '><Link href="/export">Export</Link>
            </li>
          </ul>
        </nav>

        <div className="sign-log">
            <ul className="sign-log justify-between flex">
                <li className='ml-5 text-black font-bold '><a href="/">SignUp</a></li>
                <li className='ml-5 text-black font-bold'><a href="/">LogIn</a></li>
            </ul>
        </div>
      </header>
      
    </div>
  )
}