import Link from 'next/link'

const NavBar = () =>{
    return(
        <nav className="bg-[#C7DEEB] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <ul className="flex items-center space-x-4">
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Home</a></li>
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">About</a></li>
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Contact</a></li>
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Your Orders</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;