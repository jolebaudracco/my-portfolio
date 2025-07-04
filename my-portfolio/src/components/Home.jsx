import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import photo from '../assets/photo.jpg';

function Home() {
  return (
    <Box
      sx={{
        // border: "1px solid #0c4083",
        // borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        marginTop: "auto",
        marginBottom: "30px",
        // backgroundColor: "rgba(72, 69, 69, 0)",
        // backdropFilter: "blur(2px)",
        width: "80%",
      }}
    >
      {/* Sección 1: Avatar + Nombre */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Avatar
          alt="photo"
          src={photo}
          sx={{
            width: 180,
            height: 180,
            marginBottom: "20px",
            border: "3px solid #00e0ff",
            boxShadow: "0 0 15px #00e0ff, 0 0 25px #00e0ff",
          }}
        />

        <Typography
          sx={{
            fontSize: "40px",
            marginBottom: "10px",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #000, 0 0 20px #00e0ff",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Hi! I'm Jorgelina Baudracco
        </Typography>
      </Box>

      {/* Sección 2: Descripción */}
      <Box
        sx={{
          marginBottom: "30px",
          textAlign: "center",
          maxWidth: "700px",
          backgroundColor: "rgba(72, 69, 69, 0)",
          backdropFilter: "blur(1px)",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            color: "#ffffff",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 600,
            textAlign: "center",
            textShadow: "0 0 5px #00e0ff",
          }}
        >
          I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications.
        </Typography>
      </Box>

      {/* Sección 3: Botón */}
      <Box>
        <Button
          variant="outlined"
          sx={{
            color: "#00e0ff",
            border: "2px solid #00e0ff",
            textShadow: "0 0 5px rgba(0, 225, 255, 0.98)",
            padding: "10px 20px",
            borderColor: "#00e0ff",
            fontFamily: "'Orbitron', sans-serif",
            '&:hover': {
              backgroundColor: "#00e0ff",
              color: "#000",
            },
          }}
        >
          Contact Me!
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
