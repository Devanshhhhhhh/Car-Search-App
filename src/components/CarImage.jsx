import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Specification from './Specification'

export default function CarImage({ name, imageUrl, hasSearched}){
    if (!hasSearched || !imageUrl) return null;

    return (
    <div className='Card' style={{padding: "30px 15px 30px 30px"}}>
        <Card sx={{ width: 750, boxShadow: '0 8px 24px #857b5fff', borderRadius: 2 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="380"
                image={imageUrl}   // IMAGE FROM API
                alt=""     // from api
                />
                <CardContent
                    sx={{
                        backgroundColor: '#f2e8c9'
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        mb: 2,
                        background: 'linear-gradient(to right, #675f48, #b4a67e)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                    >
                        {name || 'Car Name'}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', maxHeight: 100}}>
                        {name
                            ? `Search result for: ${name}. The image displayed above is fetched using the Car Imagery API. 
                            On right you can view key specifications such as engine type, fuel efficiency, drive system, and transmission. 
                            All data is retrieved from trusted third-party sources to ensure accuracy.`
                            : 'Search for a car to see its image and specifications. Make sure to enter the full model name for more accurate results.'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    )
}