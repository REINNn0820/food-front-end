import { Categories } from "./_components/Categories";
import { Dishes } from "./_components/Dishes";

export default function Page() {
  return (
    <div className="w-full bg-[#F7F7F7] ">
      <Categories />
      <Dishes />
    </div>
  );
}
