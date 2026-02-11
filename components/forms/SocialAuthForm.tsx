"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 border-radius-8 min-h-12 flex-1 px-4 py-3";

  const handleSignIn = async (provider: "github" | "google") => {
    console.log("Attempting signIn:", provider);
    try {
      // Use programmatic redirect so we can inspect response for debugging
      const res = await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });

      console.log("signIn response:", res);

      // If NextAuth gives us a url, navigate there
      if (res && "url" in res && res.url) {
        window.location.href = res.url;
        return;
      }

      // If there's an error, show it
      if (res && "error" in res && res.error) {
        toast.error(res.error);
        return;
      }

      toast.warning("No redirect URL returned from sign-in.");
    } catch (error) {
      console.error(error);
      toast.warning("Sign-in Failed", {
        description: error instanceof Error ? error.message : "An error occured during sign-in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
