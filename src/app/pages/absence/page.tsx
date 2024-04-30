import { AbcsenceCard } from "@/components/component/abcsence-card";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";



export default withPageAuthRequired(
  async () => {
    return new Promise((resolve) => {
      resolve(<AbcsenceCard />);
    });
  },
  { returnTo: "/profile" }
);
