"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";


const Cart = () => {

  const itemCount :number = 1

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
            <SheetTitle>Cart(0)</SheetTitle>
            {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              <ScrollArea>
                {/* {items.map(({ product }) => (
                  <CartItem
                    product={product}
                    key={product.id}
                  />
                ))} */}
              </ScrollArea>
            </div>
            <div className='space-y-4 pr-6 text-white'>
              <Separator />
              <div className='space-y-3 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>
                    Transaction Fee
                  </span>
                  {/* 100 */}
                  <span>{formatPrice(12)}</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>
                    {formatPrice(12 + 11)}
                  </span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href='/cart'
                    className={buttonVariants({
                      className: 'w-full',
                    })}>
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src='/hippo-empty-cart.png'
                fill
                alt='empty shopping cart hippo'
              />
            </div>
            <div className='text-xl font-semibold text-white'>
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href='/products'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className:
                    'text-sm text-muted-foreground',
                })}>
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Cart;
