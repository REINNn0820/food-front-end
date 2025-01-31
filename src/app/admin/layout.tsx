import { Navigation } from "./_components/Navigation";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import { Button } from "reactstrap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SignedOut>
        <main className="h-screen flex items-center justify-center ">
          <div className="w-[1000px] flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="border flex items-center justify-center w-8 h-8 ">
                <ChevronLeft />
              </div>
              <h1 className="text-[24px] text-[#09090B]">
                Create your account
              </h1>
              <p className="text-[#71717A] text-[16px]">
                Sign up to explore your favorite dishes.
              </p>
              <SignInButton>
                <button className="w-[80px] h-[40px] bg-white border rounded-[8px]">
                  sign in
                </button>
              </SignInButton>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat bg-center w-1/2 h-[1000px] rounded-[16px] "
            style={{ backgroundImage: `url(/signin.png)` }}
          ></div>
        </main>
      </SignedOut>
      <SignedIn>
        <div className="bg-muted h-screen flex gap-6   ">
          <Navigation />

          <div className="flex flex-col w-full ">
            <div className="flex justify-end pt-4  w-11/12">
              <UserButton />
            </div>
            {children}
          </div>
        </div>
      </SignedIn>
    </>
  );
}
