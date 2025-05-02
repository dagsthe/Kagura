import rbxlogo from '../../assets/robloxlogo.png'

interface Props{
    Role:string,
    Text:string,
}

export default function(props:Props){
    return (
        <>
        <div className='flex flex-col items-center text-center h-40'>
            <img alt='picture' className='aspect-square h-15 lg:h-40' src={rbxlogo}/>
            <p className='font-semibold text-[#ffa000]'>{props.Role}</p>
            <p className='font-light'>{props.Text}</p>
        </div>
        </>
    )
}