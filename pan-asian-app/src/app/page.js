import Image from 'next/image'
import SvgComponent from './PanAsianLogo'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen bg-[#efd9c3]">
        <img class="h-auto max-w-full" src="/PAN_ASIAN.svg" alt="image description">      
        </img>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
            Society of Asian Scientists and Engineers{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
      <Link href="/clubpage"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
            South Asian Student Association{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
            Vietnamese Student Association{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
            Filipino Student Association{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
            Chinese Student and Scholar Association{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
            Korean Student Association{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
          Hawaiian Cultural Association{' '}
          </h2>
        </Link>
      </div>

      <div className="mb-10 lg:mb-32 w-full grid text-center">
        <Link href="/clubpage"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-3xl font-semibold text-gray-700`}>
          Japanese Student Association{' '}
          </h2>
        </Link>
      </div>
    </main>
  )
}