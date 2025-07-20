import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

export default function Logo() {
  return (
    <Box
      sx={{
        p: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <DirectionsCarFilledIcon
        sx={{
          color: '#b4a67e',
          mr: 1,
          fontSize: 50,
          animation: `${bounce} 1.5s ease-in-out infinite`,
          filter: 'drop-shadow(0 0 4px #675f48aa)',
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #f2e8c9, #b4a67e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '1px 1px 2px rgba(0,0,0,0.15)',
        }}
      >
        CarSearch
      </Typography>
    </Box>
  );
}
