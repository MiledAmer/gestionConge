import Image from 'next/image';
import img from "./../img/description.svg";

export function DescriptionSection() {
  return (
    <section id='description' className="w-full py-12 md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
          <Image
            alt="Image"
            className="mx-auto rounded-xl object-cover object-center sm:w-full lg:order-first"
            height="400"
            src={img}
            width="550"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Découvrez notre solution de gestion de congés responsive
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Notre plateforme de gestion de congés est conçue pour une utilisation fluide sur PC et mobile. Avec des
              outils intuitifs et des fonctionnalités avancées, vous pourrez gérer efficacement les congés de votre
              équipe et collaborer de manière transparente, quel que soit votre appareil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
