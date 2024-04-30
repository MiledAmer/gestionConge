import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ListeDemandesCard() {
  return (
    <section className="w-full py-20  md:py-24 lg:py-32  xl:py-20 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Demandes d&#39;absences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Tabs className="flex flex-col" defaultValue="approved">
              <TabsList className="flex items-center justify-between border-b bg-gray-100 p-2 dark:bg-gray-800">
                <TabsTrigger
                  className="flex-1 rounded-md px-4 py-2 text-center font-medium transition-colors hover:bg-gray-200 data-[active]:bg-white data-[active]:text-gray-900 dark:data-[active]:bg-gray-950 dark:data-[active]:text-gray-50"
                  value="approved"
                >
                  Demandes approuvées
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                    3
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  className="flex-1 rounded-md px-4 py-2 text-center font-medium transition-colors hover:bg-gray-200 data-[active]:bg-white data-[active]:text-gray-900 dark:data-[active]:bg-gray-950 dark:data-[active]:text-gray-50"
                  value="pending"
                >
                  Demandes en attente
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                    2
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  className="flex-1 rounded-md px-4 py-2 text-center font-medium transition-colors hover:bg-gray-200 data-[active]:bg-white data-[active]:text-gray-900 dark:data-[active]:bg-gray-950 dark:data-[active]:text-gray-50"
                  value="rejected"
                >
                  Demandes rejetées
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                    2
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="approved">
                <div className="grid gap-4">
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        2 avril 2023
                      </p>
                    </div>
                    <Badge
                      className="justify-self-end text-green-500"
                      variant="outline"
                    >
                      Approuvée
                    </Badge>
                  </div>
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">Sophia Anderson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        20 mai 2023
                      </p>
                    </div>
                    <Badge
                      className="justify-self-end text-green-500"
                      variant="outline"
                    >
                      Approuvée
                    </Badge>
                  </div>
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">Olivia Martinez</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        1 juin 2023
                      </p>
                    </div>
                    <Badge
                      className="justify-self-end text-green-500"
                      variant="outline"
                    >
                      Approuvée
                    </Badge>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="pending">
                <div className="grid gap-4">
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        15 mai 2023
                      </p>
                    </div>
                    <Badge className="justify-self-end" variant="outline">
                      En attente
                    </Badge>
                  </div>
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">Emily Davis</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        1 juin 2023
                      </p>
                    </div>
                    <Badge className="justify-self-end" variant="outline">
                      En attente
                    </Badge>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-4" value="rejected">
                <div className="grid gap-4">
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">Michael Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        1 juin 2023
                      </p>
                    </div>
                    <Badge
                      className="justify-self-end text-red-500"
                      variant="outline"
                    >
                      Rejetée
                    </Badge>
                  </div>
                  <div className="grid grid-cols-[40px_1fr_100px] items-center gap-4 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        10 juin 2023
                      </p>
                    </div>
                    <Badge
                      className="justify-self-end text-red-500"
                      variant="outline"
                    >
                      Rejetée
                    </Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
