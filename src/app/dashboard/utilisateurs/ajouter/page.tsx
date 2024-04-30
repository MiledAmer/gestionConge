import { AjouterUtilisateurCard } from "@/components/component/ajouter-utilisateur-card";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async () => {
    return new Promise((resolve) => {
      resolve(
        <div className="my-12">
          <AjouterUtilisateurCard />
        </div>
      );
    });
  },
  { returnTo: "/profile" }
);
