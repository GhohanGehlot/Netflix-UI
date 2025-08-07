import Image from "next/image"
import { NavbarItem } from "../atoms/NavbarItem"
import { BsBell, BsSearch } from "react-icons/bs"

export const Navbar = () => {
    return(
       <div 
        className="w-full fixed z-40"
       >

        <div  
        className="flex flex-row items-center px-16 py-6 bg-zinc-900/10"
        >
            <Image 
             src= {"/images/logo.png"}
             alt= "logo"
             height= {12}
             width= {150}
             />


             <div className=" flex flex-row ml-8 gap-7 ">
                <NavbarItem label="Home"/>
                <NavbarItem label="About"/>
                <NavbarItem label="Tv shows"/>
                <NavbarItem label="Movies"/>
                <NavbarItem label="latest"/>


             </div>

             <div className="flex flex-row ml-auto gap-7 items-center">

                <div>
                    <BsSearch className="text-gray-300 hover:text-gray-700 transition" />
                </div>

                  <div>
                    <BsBell className="text-gray-300 hover:text-gray-700 transition" />
                </div>

                <div className="w-10 h-10 rounded-md overflow-hidden">
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="avatar" />
                    
                </div>

                
                
             </div>

        </div>

       </div>
    )
}