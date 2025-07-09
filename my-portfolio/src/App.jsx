import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home';
import wallpaper from './assets/wallpaper.jpg'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function App(){
  const [selectedScreen, setSelectedScreen] = useState('home')
  console.log("🚀JB ~ App ~ selectedScreen:", selectedScreen)
  
  
  return (
    <>
      <Box sx={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        minWidth: '100vw',
        display: 'space-between',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {selectedScreen === "home" && <Home /> }
        {selectedScreen === "about me" && <AboutMe /> }
    
        <Box sx={{
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          // backdropFilter: "blur(30px)",
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px 0',
          zIndex: 1000,
          boxShadow: '0 -2px 5px rgba(0,0,0,0.3)',
          borderTop: '1px solid white',
          borderRadius: '10px 10px 0 0',
        }}>
          <Box sx={{ml: 2}}>
            <Typography
              sx={{
                fontSize: "32px",
                color: "#00e0ff", // amarillo estilo Star Wars
                fontFamily: "'Orbitron', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "0 0 5px rgba(59, 167, 255, 0.42), 0 0 15px rgb(59, 173, 255)",
                fontWeight: 700,
                cursor: "default"
              }}
              >
              Jole's Code
            </Typography>
          </Box>

          <Box sx={{mr: 2}}>
          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("home")}
            sx={{
              color: "#00e0ff",
              borderColor: "#00e0ff",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px #00e0ff, 0 0 10px #00e0ff",
              '&:hover': {
                backgroundColor: "#00e0ff",
                color: "#000",
                borderColor: "#00e0ff",
                boxShadow: "0 0 10px #00e0ff, 0 0 20px #00e0ff",
              },
              mr: 3
            }}
          >
            Home <HomeIcon sx={{ ml: 1 }} />
          </Button>



          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("about me")}
            sx={{
              color: "#00e0ff",
              borderColor: "#00e0ff",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px #00e0ff, 0 0 10px #00e0ff",
              '&:hover': {
                backgroundColor: "#00e0ff",
                color: "#000",
                borderColor: "#00e0ff",
                boxShadow: "0 0 10px #00e0ff, 0 0 20px #00e0ff",
              },
              mr: 3
            }}
          >
            About Me <AccountCircleIcon sx={{ ml: 1 }}/>
          </Button>


          <Button
            variant="outlined"
            onClick={() => setSelectedScreen("certification")}
            sx={{
              color: "#00e0ff",
              borderColor: "#00e0ff",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 5px #00e0ff, 0 0 10px #00e0ff",
              '&:hover': {
                backgroundColor: "#00e0ff",
                color: "#000",
                borderColor: "#00e0ff",
                boxShadow: "0 0 10px #00e0ff, 0 0 20px #00e0ff",
              },
            }}
          >
            Certification <WorkspacePremiumIcon sx={{ ml: 1 }}/>
          </Button>
          </Box>
          </Box>
        </Box>
    </>
  )
}



export default App
