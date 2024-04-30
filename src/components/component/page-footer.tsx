import Link from "next/link"
import { classNameProps } from "./type";


export function PageFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link className="flex items-center" href="#">
              <MountainIcon className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Acme Inc</span>
            </Link>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Demande
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Absences
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="https://github.com/MiledAmer">
                  GitHub
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://nextjs.org/docs">
                  NextJS
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="https://v0.dev">
                  V0 AI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Remerciement</h4>
            <p className="mb-4">
              Nous tenons à remercier notre encadrante universitaire, Aljia Bouzidi, pour son soutien et son expertise
              tout au long de notre projet.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© 2024 Miled. Tous droits réservés.</div>
      </div>
    </footer>
  )
}

function MountainIcon(props: classNameProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
