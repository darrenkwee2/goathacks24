import Link from 'next/link'

const NavBar = () =>{
    return(
        <nav className="bg-[#687259] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <ul className="flex items-center space-x-4">
            <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Home</a></li>
            <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Login</a></li>
            <li><a className="mb-3 text-xl font-semibold text-white-700" href="/about">About</a></li>
            <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Contact</a></li>
            <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Your Orders</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;