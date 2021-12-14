import {Link} from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Grid from '@mui/material/Grid';
import './ProductList.css'


function ProductList(props) {

    const {products} = props

   
    return (
        <div>
            
          
            {
                products.map((product) => {
                  
                    return (
                        <div class="card1">
                        <Grid class="pleasework" >
                       
                        <card class="u choose">  </card>
                           <Card sx={{ maxWidth: 200 }}>
                            <Link to={`/${product._id}`}><CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={product.img}
                             />
                             </Link>
                             <CardContent>
                               <Typography gutterBottom variant="h5" component="div">
                                €{product.price}
                               </Typography>
                               <Typography variant="body2" color="text.secondary">
                                {product.title}
                               </Typography>
                             </CardContent>
                               <CardActions>
                               <Button size="small"><AddCircleRoundedIcon /></Button>
                             </CardActions>
                            </Card>
                            </Grid>  
                          
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default ProductList

