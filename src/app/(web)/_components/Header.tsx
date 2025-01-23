import Link from "next/link";
import { Logo } from "./Logo";

export default function Page() {
  return (
    <div className=" bg-[#18181B] w-full h-24 flex items-center justify-between px-4">
      <Link href={`/`}>
        <div className="flex gap-2 ml-12 justify-center items-center">
          <div>
            <Logo />
          </div>
          <div>
            <div className="flex ">
            <h1 className=" text-[20px] font-semibold text-[#FAFAFA]">Nom</h1>
            <h1 className=" text-[20px] font-semibold text-[#EF4444]">Nom</h1>
            </div>
            <h2 className="text-xs text-muted-foreground text-[12px]  ">Swift delivery</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}