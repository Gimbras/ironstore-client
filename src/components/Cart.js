import React, {useContext} from 'react'
import {UserContext} from '../context/app.context'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


 function Cart() {
    const {cartItems, setCartItems} = useContext(UserContext)


    return (
        <div>
            <h2>Cart Items</h2>
        {
            cartItems.map((product) => {
              
                return (
                    
                    <div class="card1">
                    <Grid class="pleasework" >
                   
                    <card class="u choose">  </card>
                       <Card sx={{ maxWidth: 250, minWidth:250 }}>
                        <Link to={`/${product._id}`}><CardMedia
                            component="img"
                            alt="image"
                            height="250"
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
                        
                        </Card>
                        </Grid>  
                      
                    </div>    
                )
            })
        }
        </div>
    )
}
export default Cart