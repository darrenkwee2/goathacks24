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

const clubpages = [
  '/sase',
  '/sasa',
  '/vsa',
  '/fsa',
  '/cssa',
  '/ksa',
  'shaka',
  '/wooja',
]

const logos = [
  '/ClubLogos/SASE.png',
  '/ClubLogos/SASA',
  '/ClubLogos/VSA.png',
  '/ClubLogos/FSA.png',
  '/ClubLogos/CSSA.png',
  '/ClubLogos/KSA.jpg',
  '/ClubLogos/SHAKA',
  '/ClubLogos/WOOJA',
]

export default function Home() {
  const renderAssociationLink = (name, clubpage, imageUrl) => (
    <div key={name} className="mb-10 lg:mb-32 w-full grid text-center relative">
      <Link href={clubpage} passHref className="group rounded-lg border border-transparent px-5 py-4 flex items-center justify-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>{name}</h2>
        <img className="h-16 w-16 object-cover ml-4" src={imageUrl} alt={`${name} Logo`} />
      </Link>
    </div>
  );
  
  


  return (

    <body className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="w-full bg-[#ebd4c7]">
        <NavBar></NavBar>
        <img className="h-auto max-w-full mb-10" src="/PAN_ASIAN.svg" alt="image description">
        </img>
      </header>
      {associations.map((association, index) => renderAssociationLink(association, clubpages[index], logos[index]))}
    </body>
  );
}