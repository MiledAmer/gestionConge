import { ListeUtilisateurs } from "@/components/component/liste-utilisateurs";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";


export default withPageAuthRequired(
  async () => {
    return new Promise((resolve) => {
      resolve(<ListeUtilisateurs />);
    });
  },
  { returnTo: "/profile" }
);
