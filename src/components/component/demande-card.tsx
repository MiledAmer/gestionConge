import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function DemandeCard() {
  return (
    <Card className="mx-auto max-w-md mt-28 space-y-6 ">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold">Demande d'absence</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Remplissez le formulaire ci-dessous pour soumettre votre demande.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Date de début</Label>
              <Input id="startDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">Date de fin</Label>
              <Input id="endDate" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Motif</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un motif" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maladie">Maladie</SelectItem>
                <SelectItem value="conge">Congé</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="justification">Justificatif</Label>
            <Input id="justification" type="file" />
          </div>
          <Button className="w-full" type="submit">
            Soumettre la demande
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
