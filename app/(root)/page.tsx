import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return <div className="flex min-h-screen flex-col items-center justify-center gap-4" />;
};

export default Home;
