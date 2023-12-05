"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  return (
    <div className="text-blue-300">
      <Sheet>
        <SheetTrigger className="'group -m-2 flex items-center p-2">
          <ShoppingCart
            aria-hidden="true"
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          />
           <span className='ml-2 text-sm font-medium text-blue-500 group-hover:text-blue-700 bg-blue-200 px-2 py-1 rounded-full'>
          {/* {isMounted ? itemCount : 0} */}
          {0}
        </span>
        </SheetTrigger>
        <SheetContent  className='flex w-96 flex-col pr-0 sm:max-w-lg'>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Cart;
