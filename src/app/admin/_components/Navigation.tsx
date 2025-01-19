import { SquareMenu } from 'lucide-react';
import { Truck } from 'lucide-react';
import { Settings } from 'lucide-react';

export function Navigation() {
  return (
    <div>
      <div className="h-full bg-[#FFFFFF] w-[205px]">
        <div className="flex gap-2  justify-center mt-12">
          <div>
            <img src="nom.png" />
          </div>
          <div>
            <p className="text-[#09090B] text-[18px] font-semibold">NomNom</p>
            <p className="text-[#71717A] text-[12px] font-normal">
              Swift delivery
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-12 ml-6'>
        <div className="w-[165px] h-[40px]  rounded-full flex  items-center bg-[#FFFFFF] gap-2 text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]  ">
          <div><SquareMenu/></div>
          <p>Food menu</p>
          </div>
          <div className="w-[165px] h-[40px]  rounded-full flex items-center bg-[#FFFFFF] hover:bg-[#18181B] gap-2 text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]  ">
          <div><Truck/></div>
          <p>Orders</p>
          </div>
          <div className="w-[165px] h-[40px]  rounded-full flex items-center bg-[#FFFFFF] hover:bg-[#18181B] gap-2  text-[#000000]  pl-6 hover:bg-[#18181B] hover:text-[#ffffff]">
          <div><Settings/></div>
          <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
