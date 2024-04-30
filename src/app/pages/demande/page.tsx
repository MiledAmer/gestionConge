import { DemandeCard } from "@/components/component/demande-card";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";


export default withPageAuthRequired(
  async () => {
    return new Promise((resolve) => {
      resolve(<DemandeCard />);
    });
  },
  { returnTo: "/profile" }
);
