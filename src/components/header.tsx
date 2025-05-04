import CompanyTitle from "./ui/CompanyTitle"
import { Link } from "react-router-dom";
import {useClickManager} from "./clickManager"

export default function(){
    const clickManager = useClickManager()

    let buttonClassName = "hover:bg-neutral-700/70 transition-all rounded-2xl px-3 py-2"
    return (
    <>

    <div className="z-10 h-15 bg-black/20 flex flex-row justify-between px-10 top-0 fixed w-full backdrop-blur-md">
        <CompanyTitle></CompanyTitle>
        <div className="md:flex text-primary brightness-90 items-center gap-0 lg:gap-5 xl:gap-4 font-semibold text-lg hidden md:block text-white">
            <Link to="/" onClick={(e)=>clickManager("",e)}> <p className={buttonClassName}>Home</p> </Link>
            <Link to="/" onClick={(e)=>clickManager("aboutus",e)}> <p className={buttonClassName}>About Us</p> </Link>
            <Link to="/" onClick={(e)=>clickManager("experiences",e)}> <p className={buttonClassName}>Experiences</p> </Link>
            <Link to="/" onClick={(e)=>clickManager("contact",e)}> <p className={buttonClassName}>Contact us</p> </Link>
        </div>
    </div>
    </>
    )
}