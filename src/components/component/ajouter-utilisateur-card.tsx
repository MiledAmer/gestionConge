import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function AjouterUtilisateurCard() {
  return (
    <Card className="mx-auto max-w-md space-y-6 p-8 ">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Ajouter un utilisateur</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Remplissez le formulaire ci-dessous pour ajouter un nouvel utilisateur.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">Prénom</Label>
            <Input id="first-name" placeholder="Entrez le prénom" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Nom</Label>
            <Input id="last-name" placeholder="Entrez le nom" />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-500 dark:text-gray-400">ou bien</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Entrez l'email" type="email" />
        </div>
        <Button className="w-full" type="submit">
          Ajouter l&#39;utilisateur
        </Button>
      </div>
    </Card>
  )
}
