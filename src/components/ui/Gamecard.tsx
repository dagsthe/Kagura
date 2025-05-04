import {useState, useEffect} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Props{
    src:string,
    Gamename:string
    ExperienceId:string | number
    VisitCount:string,
    PlaceId:number,
    rounded?:string,
    className?:string,
}

function formatNumber(numStr: string): string {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return numStr;
  
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M+';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K+';
    }
  
    return num.toString();
  }

export default function(props:Props){
    let [VisitCount, SetVisit] = useState(formatNumber(props.VisitCount))
    let [GameName, SetName] = useState(props.Gamename)
    let Link = "https://www.roblox.com/games/"+String(props.PlaceId)

    let rounded = "rounded-none"
    if (props.rounded)
        rounded = props.rounded


    useEffect(() => {
        fetch(`https://corsproxy.io/?https://games.roblox.com/v1/games?universeIds=${props.ExperienceId}`)
        .then(res => res.json())
        .then(data => {
            let visits = data.data[0].visits;
            visits = formatNumber(visits)

            SetName(data.data[0].name)
            SetVisit(visits)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <>
        <a href={Link} target="_blank" rel="noopener noreferrer">
            <div className={`relative hover:brightness-110 ${props.className}`}>
                <div className={"relative h-50 aspect-video  " + rounded}>
                    <img 
                            className={"brightness-90 "+rounded}
                            src={props.src}
                            alt="Image"
                    />
                    <div className={"pointer-events-none absolute w-[100%] -translate-x-1/2 left-1/2 top-0 h-1/2 z-10 bg-gradient-to-b from-black/80 "+rounded}></div>
                </div>
                

                <div className="z-10 absolute top-0 left-6 text-2xl font-semibold truncate flex flex-col text-left text-white text-shadow">
                    <h2 className="">{GameName}</h2>

                    <div>
                        <i className="fa fa-play"></i>
                        <span className="pl-2">{VisitCount}</span>
                    </div>
                </div>

            </div>
        </a>



        </>
    )
}