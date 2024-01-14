import Link from 'next/link'

const NavBarClient = () => {
  return (
    <nav className="bg-[#687259] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img class="h-14 w-14 object-cover " src="panasian_transparent.png" alt="panasian transparent logo"></img>
        </div>
        <ul className="flex items-center space-x-4">
          <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Home</a></li>
          <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Login</a></li>
          <li><a className="mb-3 text-xl font-semibold text-white-700" href="/about">About Us</a></li>
          <li><a className="mb-3 text-xl font-semibold text-white-700" href="/">Your Orders</a></li>
        </ul>
      </div>
    </nav>
  )
}

export const NavBarVendor = () => {
   return (
    <nav className="bg-[#687259] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img className="h-14 w-14 object-cover" src="panasian_transparent.png" alt="panasian transparent logo" />
        </div>
        <ul className="flex items-center space-x-4">
          <li><a className="mb-10 text-xl font-semibold text-white-700" href="/">Home</a></li>
          <li><a className="mb-10 text-xl font-semibold text-white-700" href="/">About This Organization</a></li>
          <li><a className="mb-10 text-xl font-semibold text-white-700" href="/">Incoming Orders</a></li>
          <li><a className="mb-10 text-xl font-semibold text-white-700" href="/">Sign Out</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBarClient;
