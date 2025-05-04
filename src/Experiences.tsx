import Header from './components/header'
import Footer from "./components/footer"
import { Fade, Slide } from "react-awesome-reveal";
import {gameIds} from "./gameIds"
import Gamecard from "./components/ui/Gamecard"

export default function(){
    return (
        <>
            <Header/>

            <section className='text-center mt-24 h-auto'>
                <h1 className='text-4xl font-bold mb-10 text-white'>Our Experiences</h1>
    
                <Slide direction='left' triggerOnce={true}>
                <Fade>
                    <div className='flex justify-center flex-wrap gap-y-10 mb-16'>
                    {gameIds.map((game, _) =>(
                        <Gamecard className='mx-5' Gamename={game.Name} src={game.Image} ExperienceId={game.experienceId} VisitCount={game.AltVisitCount} PlaceId={game.PlaceId}></Gamecard>
                    ))}
                    </div>
                </Fade>
                </Slide>
            </section>

            <Footer/>
        </>
    )
}