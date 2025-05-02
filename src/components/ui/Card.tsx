interface Props{
    Heading:string
    Text:string
}

import {Link} from "react-router-dom"

export default function(props:Props){
    return (
        <>
            <div className="border-2 border-gray-700 rounded-2xl pl-5 aspect-auto">
                <h1 className="text-6xl lg:text-4xl font-semibold py-5 ">{props.Heading}</h1>
                <div className="text-primary brightness-90 w-[80%]">{props.Text}</div>
                <Link to={"/contact"}><button type="button" className="font-bold mb-10 underline-offset-4 underline mt-2 cursor-pointer">Learn More &gt;</button></Link>
            </div>
        </>
    )
}