import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Episode = ({Episodename,id,image}) => {
  return (
      <>
          {/* <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions>
          </Card> */}

          <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
              <img className='rounded w-48 ' src={image} alt="" />
          
              <p className='font-bold mt-2 mb-1 text-sm'>{Episodename}</p>


          </div>

      </>
  )
}

export default Episode
