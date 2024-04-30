import { BonjourSection } from "@/components/component/bonjour-section";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";



export default withPageAuthRequired(
  async () => {
    return new Promise((resolve) => {
      resolve(<BonjourSection />);
    });
  },
  { returnTo: "/pages" }
);
