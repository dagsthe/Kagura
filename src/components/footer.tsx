import CompanyTitle from "./ui/CompanyTitle"
import { Link } from "react-router-dom";
import {useClickManager} from "./clickManager"

export default function(){
    const clickManager = useClickManager()

    return (
    <>
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-[20%] lg:gap-[50%] w-full">
        <CompanyTitle className="text-white brightness-90"/>
        <div className="flex text-white brightness-90 items-center gap-7">
            <Link onClick={(e) => clickManager("", e)} to={"/"}>
                <p>Home</p>
            </Link>
            
            <Link onClick={(e)=>clickManager("experiences",e)} to={"/experiences"}>
                <p>Experiences</p>
            </Link>

            <Link onClick={(e) => clickManager("contact", e)} to={"/team"}>
                <p>Contact Us</p>
            </Link>
        </div>
    </div>
    <hr className="border-t w-[80%] mx-auto border-amber-600 opacity-50 mt-4" />
    <p className="text-white brightness-50 text-center my-6">© 2025 Kagura Development Studios. All rights reserved.</p>
    </>
    )
}