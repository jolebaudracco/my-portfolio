import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home';


function App(){
  const [selectedScreen, setSelectedScreen] = useState('home')
  console.log("🚀JB ~ App ~ selectedScreen:", selectedScreen)
  
  
  return (
    <>
      <Box sx={{
        backgroundImage: 'url(https://wallpapercat.com/w/full/f/9/1/2113259-3840x2160-desktop-4k-minimalist-wallpaper-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {selectedScreen === "home" && <Home /> }
        {selectedScreen === "about me" && <AboutMe /> }
    
        <Box sx={{
          backgroundColor: 'gray',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0',
          zIndex: 1000
        }}>
          <Button variant="contained" onClick={() => {setSelectedScreen("home")}}>home <HomeIcon/></Button>
          <Button variant="contained" onClick={() => {setSelectedScreen("about me")}}>about me</Button>
          <Button variant="contained" onClick={() => {setSelectedScreen("certification")}}>Certification</Button>
        </Box>
      </Box>
    </>
  )
}



export default App
