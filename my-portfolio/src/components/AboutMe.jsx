import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pcCode from '../assets/aboutmeimg/pc-code.jpg';
import lapCoding from '../assets/aboutmeimg/lap-coding.jpg';


const AboutMe = () => {
  return (
    <Box sx={{
  p: 4,
  // maxWidth: 800,
  // margin: '0 auto',
  color: '#00ffff', // bright cyan
  fontFamily: 'Orbitron, sans-serif', // futuristic font (Google font)
  textShadow: '0 0 5px rgba(0, 255, 255, 0.16), 0 0 10pxrgba(0, 255, 255, 0.19)',
  fontSize: '1.2rem',
  textAlign: 'center',
}}>
  <Box sx={{
  maxHeight: "30vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 4,
  padding: 2
}}>
  
  <Box
    component="img"
    src={pcCode}
    alt="Imagen de ejemplo"
    sx={{
      width: 700,
      height: 'auto',
      borderRadius: 2,
      objectFit: 'cover',
      boxShadow: '0 40px 60px rgb(0, 0, 0)',
      border: '2px solid rgb(0, 0, 0)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 50px 90px rgb(0, 0, 0)',
        border: '2px solid rgb(0, 0, 0)',
      }
    }}
  />

  <Box
    component="img"
    src={lapCoding}
    alt="Imagen de ejemplo"
    sx={{
      width: 700,
      height: 'auto',
      borderRadius: 2,
      objectFit: 'cover',
      boxShadow: '0 40px 60px rgb(0, 0, 0)',
      border: '2px solid rgb(0, 0, 0)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 50px 90px rgb(0, 0, 0)',
        border: '2px solid rgb(0, 0, 0)',
      }
    }}
  />
</Box>
  <Typography gutterBottom sx={{
    fontSize: "40px",
            marginBottom: "10px",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #000, 0 0 20px #00e0ff",
            fontWeight: 700,
            textAlign: "center",
  }}>
    About Me
  </Typography>

<Typography sx={{
            fontSize: "30px",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            textAlign: "center",
            textShadow: "0 0 5px #00e0ff",
            mt: "30px"
  }}>
    I'm a passionate Full Stack Developer with a strong foundation in QA testing, blending creativity with precision to build and improve robust digital experiences. With hands-on experience in JavaScript, React, Node.js, and MongoDB, I enjoy crafting clean, efficient code while ensuring software quality through manual and automated testing. My background in QA gives me a sharp eye for bugs and a mindset focused on performance, usability, and reliability. I love turning ideas into functional, scalable applications — and I believe quality isn’t just the last step, it's a part of every stage in development.
  </Typography>


  
</Box>
  );
};

export default AboutMe;
// This component can be used in the main App component or any other page to display the "About Me" section of the portfolio.
// It uses Material-UI for styling and layout, ensuring a clean and responsive design.