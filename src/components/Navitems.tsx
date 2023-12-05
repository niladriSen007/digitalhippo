"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/useClickOutside"

const Navitems = () => {
   const [activeIndex,setActiveIndex] = useState<null | number>(null)
   const isAnyOpen = activeIndex !== null


   useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
        if(e.key === "Escape"){
            // console.log(e.key)
            setActiveIndex(null)
        }
    }

    document.addEventListener("keydown",handler)

    return ()=>{
        document.removeEventListener("keydown",handler)
    }
   },[])

   const navRef = useRef<HTMLDivElement | null>(null)

   useOnClickOutside(navRef, () => setActiveIndex(null))


  return (
    <div  className='flex gap-4 h-full'  ref={navRef}>
        {
            PRODUCT_CATEGORIES.map((category,index)=>{
                const handleOpenToggle = () : void =>{
                    if(activeIndex === index) setActiveIndex(null)
                    else setActiveIndex(index)
                }

                const isOpen : boolean = index === activeIndex

                const close = () => {}
                return (
                    <NavItem {...{ category,handleOpenToggle,isOpen,isAnyOpen,close}} key={category?.value} />
                )
            })
        }
    </div>
  )
}
export default Navitems