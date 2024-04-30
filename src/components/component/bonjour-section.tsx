import Link from "next/link"
import Image from 'next/image';
import img from './../img/bonjour.svg';

export function BonjourSection() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="md:w-1/2 flex items-center justify-center">
        <Image
          alt="Acme Company"
          className="max-w-full h-auto"
          height={400}
          src={img}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <div className="max-w-md px-6 py-12 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Rebonjour chez Gestio Tempo</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Découvrez notre entreprise innovante qui révolutionne l&#39;industrie avec des solutions sur-mesure.
        </p>
        <Link
          className="inline-flex items-center justify-center h-10 px-6 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          href="/pages/demande"
        >
          commencer
        </Link>
      </div>
    </main>
  ) 
}
