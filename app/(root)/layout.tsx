import Navbar from "@/components/navigation/navbar";
import LeftSideBar from "@/components/navigation/leftSideBar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
