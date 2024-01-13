import Image from 'next/image'
import SvgComponent from './PanAsianLogo'
import Link from 'next/link'
import NavBar from './components/navbar';

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
        <NavBar></NavBar>
        <img class="h-auto max-w-full" src="/PAN_ASIAN.svg" alt="image description">      
        </img>
      </header>
      {associations.map(renderAssociationLink)}
    </body>
  );
}