import Image from 'next/image'
// import SvgComponent from './PanAsianLogo'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen bg-[#efd9c3]">
        <img class="h-auto max-w-full" src="/PAN_ASIAN.svg" alt="image description">      
        </img>
      </div>
    </main>
  )
}
