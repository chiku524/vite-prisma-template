import { Link } from "@remix-run/react"

export function Nav() {


    return (
      <div className='bg-transparent w-full h-14 flex flex-row items-center justify-center my-5'>
        <div className='w-1/3 h-14 flex flex-row items-center justify-center'>
            <Link to="/" className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'>
                <span>Mainnet</span>
            </Link>
            <Link to="/" className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'>
                <span>Testnet</span>
            </Link>            
            <div className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'><span>Team</span></div>
            <div className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'><span>Blog</span></div>
            <Link to="/" className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'>
                <span>Settings</span>
            </Link>
        </div>
      </div>
    )
}