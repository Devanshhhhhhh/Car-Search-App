import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Specification({ specs, hasSearched }) {
    if(!hasSearched) return null;

    if (!specs) {
        return (
            <Box sx={{ padding: "20px" }}>
                <Typography variant="h6" color="error">
                    No specifications found for this model.
                </Typography>
            </Box>
        );
    }
    
  return (
    <Box className='Specs'
            style={{
                padding: "30px 30px 30px 15px",
         }}>
    <Box
      sx={{
        bgcolor: '#f2e8c9',
        color: 'black',
        borderRadius: 2,
        boxShadow: '0 8px 24px #857b5fff',
        p: 2,
        width: 480,
        height: 482,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography gutterBottom variant="h4" 
      sx={{
        fontWeight: 'bold',
        mb: 2,
        background: 'linear-gradient(to right, #675f48, #b4a67e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        }}>
        Specifications
      </Typography>

      <Box
        sx={{
          bgcolor: 'white',
          color: 'black',
          borderRadius: 1,
          p: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', height: 382}}>
            
            <Typography>Make: {specs.make}</Typography>
            <br />
            <Typography>Model: {specs.model}</Typography>
            <br />
            <Typography>Year: {specs.year}</Typography>
            <br />
            <Typography>Fuel Type: {specs.fuel_type}</Typography>
            <br />
            <Typography>Cylinders: {specs.cylinders}</Typography>
            <br />
            <Typography>Transmission: {specs.transmission}</Typography>
            <br />
            <Typography>Drive: {specs.drive}</Typography>

        </Typography>
      </Box>
    </Box>
    </Box>
  );
}
