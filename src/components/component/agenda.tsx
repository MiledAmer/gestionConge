import { Calendar } from "@/components/ui/calendar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export function Agenda() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md">
        <div className="px-6 py-4 border-b dark:border-gray-800">
          <h1 className="text-2xl font-bold">Agenda des événements</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <Calendar className="w-full" mode="month" />
          </div>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Événement</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Détails</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Réunion déquipe</TableCell>
                  <TableCell>2023-05-15</TableCell>
                  <TableCell>Discuter des objectifs trimestriels</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      Modifier
                    </Button>
                    <Button className="ml-2" size="sm" variant="outline">
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Conférence annuelle</TableCell>
                  <TableCell>2023-06-20 - 2023-06-22</TableCell>
                  <TableCell>Présentation des nouvelles fonctionnalités</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      Modifier
                    </Button>
                    <Button className="ml-2" size="sm" variant="outline">
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fête de l&#39;entreprise</TableCell>
                  <TableCell>2023-07-01</TableCell>
                  <TableCell>Célébration de la fin de l&#39;année</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      Modifier
                    </Button>
                    <Button className="ml-2" size="sm" variant="outline">
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="px-6 py-4 border-t dark:border-gray-800 flex justify-end">
          <Button variant="primary">Ajouter un événement</Button>
        </div>
      </div>
    </div>
  )
}
