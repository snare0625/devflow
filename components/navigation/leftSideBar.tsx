import React from "react";
import NavLinks from "./navbar/NavLinks";

const LeftSideBar = () => {
  return (
    <main className="background-light900_dark200 border-dark-300_dark700 hidden min-h-[1024px] border-r-[1px] sm:block">
      <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto pt-[40px] pr-[24px] pb-[32px] pl-[24px]">
        <section className="mt-10 flex h-full flex-col gap-6 pt-16">
          <NavLinks isMobileNav />
        </section>
      </div>
    </main>
  );
};

export default LeftSideBar;
