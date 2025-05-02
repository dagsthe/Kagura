interface Props{
    src:string,
    className?:string,
}

export default function(props:Props){
    let className = props.className
    if(className == undefined)
        className = ""

    return (
        <>
            <img className={"h-20 m-10 "+className} src={props.src}>
            
            </img>
        </>
    )
}