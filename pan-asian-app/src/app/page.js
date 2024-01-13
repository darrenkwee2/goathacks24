import Image from 'next/image'
import SvgComponent from './PanAsianLogo'
import Link from 'next/link'

const associations = [
  'Society of Asian Scientists and Engineers',
  'South Asian Student Association',
  'Vietnamese Student Association',
  'Filipino Student Association',
  'Chinese Student and Scholar Association',
  'Korean Student Association',
  'Hawaiian Cultural Association',
  'Japanese Student Association',
];

export default function Home() {
  const renderAssociationLink = (name) => (
    <div key={name} className="mb-10 lg:mb-32 w-full grid text-center">
      <Link href="/clubpage" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>{name}</h2>
      </Link>
    </div>
  );

  return (
    <body className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="w-full h-screen bg-[#ebd4c7]">             
        <nav className="bg-[#C7DEEB] p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-white text-xl font-bold">Your Logo</div>
            <ul className="flex items-center space-x-4">
              <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Home</a></li>
              <li><a class="mb-3 text-xl font-semibold text-white-700" href="/aboutpage">About</a></li>
              <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Contact</a></li>
              <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Your Orders</a></li>
            </ul>
          </div>
        </nav>
        <img class="h-auto max-w-full" src="/PAN_ASIAN.svg" alt="image description">      
        </img>
      </header>
      {associations.map(renderAssociationLink)}
    </body>
  );
}