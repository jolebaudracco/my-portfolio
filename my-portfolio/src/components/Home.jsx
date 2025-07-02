import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import photo from '../assets/photo.jpg'

function Home() {
  return (
    <Box sx={{
      border: "3px solid white", 
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      }}>
        <Avatar alt="photo" src={photo} sx={{width: 90, height: 90}}/>
        <Typography sx={{fontSize:"40px", padding: "20px"}}>
          Jorgelina Baudracco
        </Typography>
      
    </Box>
  );
}

export default Home;