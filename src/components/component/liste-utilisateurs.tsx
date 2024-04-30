import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ListeUtilisateurs() {
  return (
    <div className="container mx-auto mt-16 px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Utilisateurs</h1>
        <Link href="/dashboard/utilisateurs/ajouter">
          <Button
            className="bg-gray-900 text-white hover:bg-primary-dark dark:bg-gray-50"
            size="sm"
          >
            Ajouter un utilisateur
          </Button>
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4 text-left">Nom</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Téléphone</th>
              <th className="px-6 py-4 text-left">Rôle</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">john.doe@example.com</td>
              <td className="px-6 py-4">+1 (555) 123-4567</td>
              <td className="px-6 py-4">Administrateur</td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    className="text-gray-900 hover:bg-primary-light dark:text-gray-50"
                    size="sm"
                    variant="outline"
                  >
                    Modifier
                  </Button>
                  <Button
                    className="text-red-500 hover:bg-red-100"
                    size="sm"
                    variant="outline"
                  >
                    Supprimer
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">Jane Smith</td>
              <td className="px-6 py-4">jane.smith@example.com</td>
              <td className="px-6 py-4">+1 (555) 987-6543</td>
              <td className="px-6 py-4">Utilisateur</td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    className="text-gray-900 hover:bg-primary-light dark:text-gray-50"
                    size="sm"
                    variant="outline"
                  >
                    Modifier
                  </Button>
                  <Button
                    className="text-red-500 hover:bg-red-100"
                    size="sm"
                    variant="outline"
                  >
                    Supprimer
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">Bob Johnson</td>
              <td className="px-6 py-4">bob.johnson@example.com</td>
              <td className="px-6 py-4">+1 (555) 456-7890</td>
              <td className="px-6 py-4">Gestionnaire</td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    className="text-gray-900 hover:bg-primary-light dark:text-gray-50"
                    size="sm"
                    variant="outline"
                  >
                    Modifier
                  </Button>
                  <Button
                    className="text-red-500 hover:bg-red-100"
                    size="sm"
                    variant="outline"
                  >
                    Supprimer
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
