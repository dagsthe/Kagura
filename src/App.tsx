import { useState } from 'react'
import './App.css'

import Header from './components/header'
import Gamecard from "./components/ui/Gamecard"
import Footer from "./components/footer"
import {gameIds} from "./gameIds"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

import { Fade, Slide } from "react-awesome-reveal";

import { amber } from '@mui/material/colors';
import PlayerButton from './components/ui/PlayerButton'
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

function App() {
  const [ init, setInit ] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });
  }, []);

  const handleScroll = (id:string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {init && <Particles id='gradientbackground' className='-z-10 bg-amber-500/5 h-screen w-full absolute bg-rad' options={{
        fullScreen:false,
        particles:{
          color:{
            value: ["#ef7e10","#f5480a","#f27f0d"]
          },
          number:{
            value:100
          },
          shape:{
            type:"circle"
          },
          opacity:{
            value:0.8,
          },
          size:{
            value:{min:0.2, max:2}
          },
          zIndex:{
            value:-1
          },
          move:{
            enable:true,
            speed:{min:10,max:2},
            size:true,
            outModes:"bounce"
          }
        },
        preset:'fire'
      }}/>}

      <Header/>
      <section className='flex flex-col items-center justify-center pb-32 h-screen text-center'>
        <Slide>
          <Fade>
            <h1 className='text-amber-500 mb-1'>Kagura Development</h1>
          </Fade>
        </Slide>

        
        <h2 className='text-white text-xl font-light text-center'>Empowering ideas through innovation</h2>
        <div className='flex gap-5 mt-5'>
          <Button onClick={() => {handleScroll("experiences")}} variant='outlined' sx={{
            borderColor: amber[700],
            color: amber[700]
          }}>Exploure our games</Button>
          <Button onClick={() => {handleScroll("contact")}} variant='outlined' sx={{
            borderColor: amber[700],
            color: amber[700]
          }}>Contact Us</Button>
        </div>
          
          <Fade>
            <Slide direction='up'>
              <div className='flex flex-row justify-center gap-4 md:gap-16 pt-4 text-center font-bold text-xl md:text-3xl text-white'>
                <div>
                  <h2>8,000+</h2>
                  <h3>Active Players</h3>
                </div>

                <div>
                  <h2>25M+</h2>
                  <h3>Lifetime Visits</h3>
                </div>
              </div>
            </Slide>
          </Fade>


      </section>
      
        
      <section id='experiences' className='text-center mt-10 h-auto min-h-screen'>
          <h1 className='text-4xl font-bold mb-10 text-white'>Our Top Experiences</h1>

          <Slide direction='left' triggerOnce={true}>
            <Fade>
              <div className='flex justify-center flex-wrap gap-y-10 mb-16'>
                {gameIds.map((game, _) =>(
                  <Gamecard className='mx-5' Gamename={game.Name} src={game.Image} ExperienceId={game.experienceId} VisitCount={game.AltVisitCount} PlaceId={game.PlaceId}></Gamecard>
                ))}
              </div>
            </Fade>
          </Slide>

          <Link to={"experiences"}>
            <Button variant='outlined'sx={{
              borderColor: amber[700],
              color: amber[700]
            }} >See All Experiences &gt;</Button>
          </Link>
      </section>
        
     

      <section id='aboutus' className='text-white flex flex-col lg:flex-row items-center text-center justify-center'>
        <div className='w-[30%]'>
          <h1 className='text-[#ffa000] text-center'>Our Team</h1>
          <div className='flex md:grid items-center justify-center md:grid-cols-2 gap-x-10 lg:gap-y-20'>
            <Fade cascade={true} damping={0.1} triggerOnce={true}>
              <PlayerButton Text='Splaffy' Role='Founder'></PlayerButton>
              <PlayerButton Text='MyrouZin' Role='Modeler & Designer'></PlayerButton>
              <PlayerButton Text='Rex' Role='Front-end Engineer'></PlayerButton>
              <PlayerButton Text='Xen' Role='Gameplay Engineer'></PlayerButton>
            </Fade>
          </div>
        </div>

        <div className='text-lg flex flex-col gap-5 w-[90%] lg:w-[50%]'>
          <Fade delay={1000} cascade={true} damping={0.3} triggerOnce={true}>
            <h1>About Us</h1>
            <p>Founded in 2024, Kagura is a fast-growing indie game development studio with a passion for creating engaging and high-quality experiences on the Roblox platform. While our official journey began recently, our team brings over 25 years of experience in every core aspect of game development—from design and programming to art and community engagement.</p>
            <p>Our games have captured the hearts of players across all ages, generating seven-figure success and building a loyal, ever-growing community. At Kagura, we believe in the power of creativity and innovation to bring people together. That’s why we’re not just here to build games—we're here to inspire the next generation of developers to dream big and create something truly special.</p>
            <p>Whether you're here to play or to learn, you're a part of our story.</p>
          </Fade>

        </div>
      </section>

      <hr className="border-t w-[80%] mx-auto border-amber-600 opacity-50 mt-24" />

      <section className='flex flex-col lg:flex-row items-center lg:items-start gap-5 justify-between px-5 lg:px-50 mt-16'>


        <div id='contact' className='text-white w-[80%] lg:w-[40%]'>
          <Fade>
            <Slide triggerOnce={true}>
              <h1>Lets Connect!</h1>
              <p>Have questions or want to collaborate? Reach out to Kagura we're always happy to connect! For inquiries, feedback, or press-related matters, drop us a message and we’ll get back to you soon</p>
              <div className='flex h-8 aspect-square gap-5 mt-5'>
                <img className='invert' src='https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg'></img>
                <img className='invert' src='https://www.svgrepo.com/show/473495/youtube.svg'></img>
                <img className='invert' src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg'></img>
              </div>
            </Slide>
          </Fade>
        </div>

        <div className='flex flex-col gap-5 w-[80%] lg:w-[40%] mb-52'>
          <ThemeProvider theme={darkTheme}>
            <TextField color='warning' id="outlined-basic" label="Email:" variant="outlined" />
            <TextField color='warning' id="outlined-basic" label="Phone #:" variant="outlined" />
            <TextField color='warning' id="outlined-basic" label="Message" variant="outlined" multiline rows={4} />
            <Button variant='outlined'sx={{
              borderColor: amber[700],
              color: amber[700]
            }} >Send Message &gt;</Button>
          </ThemeProvider>
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

export default App
