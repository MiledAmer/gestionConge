import Link from "next/link"
import Image from 'next/image';
import hero from './../img/hero.svg';

export function Hero() {
  return (
    <section id="acceuil" className="w-full py-20  md:py-24 lg:py-32  xl:py-20 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Optimisez Vos Flux de Travail en RH
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Notre application de gestion des ressources humaines vous aide à gérer efficacement les données des employés, à suivre les congés et à automatiser les processus clés.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/api/auth/login"
              >
                Start Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="/api/auth/login"
              >
                Start as an RH
              </Link>
            </div>
          </div>
          <Image
            alt="HR Management"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="650"
            src={hero}
            width="650"
          />
        </div>
      </div>
    </section>
  )
}
