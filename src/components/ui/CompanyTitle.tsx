import { ReactNode } from "react";
import Logo from "../../assets/logo.svg"
import {Link, useLocation, useNavigate} from "react-router-dom"

interface Props{
    children?: ReactNode
    className?: string
}

export default function(props:Props){
    let children = props.children
    let className = props.className

    let location = useLocation()
    let navigate = useNavigate()
    const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            console.log("Scroll!")
            e.preventDefault(); // prevent navigation
            window.scrollTo({ top: 0, behavior: "smooth" });

        } else {
            e.preventDefault(); // prevent Link's default navigation
            navigate("/");     // navigate manually
        }
        // otherwise, let Link handle the navigation normally
    };

    return (
        <>
            <div className={`flex items-center blur-none ${className}`}>
                <Link className="flex items-center" to={"/"} onClick={handleClick}>
                    <img src={Logo} className="h-8 aspect-square"></img>
                    <p className="font-bold text-2xl text-white">Kagura Development</p>
                </Link>
                {children}
            </div>
        </>
    )
}