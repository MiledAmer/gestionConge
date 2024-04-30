import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-24 flex justify-center ">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Nous sommes une équipe d&#39;étudiants de l&#39`ISIMM (Institut Supérieur d&#39;Informatique et de Mathématiques de Monastir) qui se sont réunis pour créer un projet fédéré. Notre objectif est de construire une application web qui met en valeur nos compétences et nos connaissances en développement web.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="Amine Bouzaiene" src="https://github.com/MiledAmer.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <div className="font-medium">Miled Mohamed</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Project Manager</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="Marwa Belhaj" src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/105601211_2648344602079277_7413304017748246037_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8IVZH0cZsGIQ7kNvgHzxo68&_nc_ht=scontent.ftun15-1.fna&oh=00_AfDPiYHLaxQby7RHU2MaLd9pP0Xp9fcRHgIf8YE7tGu_Ow&oe=66581969" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <div className="font-medium">Ouerghi Ahmed</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Front-end Developer</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="Sami Maalej" src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/417404891_2271341519727196_2641389419259088212_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rWOdjU4JR3wQ7kNvgG0F_qR&_nc_ht=scontent.ftun15-1.fna&oh=00_AfDyClGPe6FAc2d7_B38zxCEXVCcJ8Zj_pyJcbEzCRSovA&oe=66367F88" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <div className="font-medium">Lahdiri Wassin</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Back-end Developer</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="Emna Trabelsi" src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.18169-9/17498842_329890327429849_3521084250905522273_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7rPoD5Yf_jwAb4cEeIv&_nc_ht=scontent.ftun15-1.fna&oh=00_AfAr5sdPiyggkpn5zVLRkf1itgM7D2WLH3W0O7hfCRae9g&oe=66581434" />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <div className="font-medium">Harzalla Haitham</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
