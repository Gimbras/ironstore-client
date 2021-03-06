import React, {useContext} from 'react'
import {UserContext} from '../context/app.context'
import './Cart.css'
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
//                     <div class="card">
//     <div class="row">
//         <div class="col-md-8 cart">
//             <div class="title">
//                 <div class="row">
//                     <div class="col">
//                         <h4><b>Shopping Cart</b></h4>
//                     </div>
//                     <div class="col align-self-center text-right text-muted">3 items</div>
//                 </div>
//             </div>
//             <div class="row border-top border-bottom">
//                 <div class="row main align-items-center">
//                     <div class="col-2"><img class="img-fluid" image={product.img}/></div>
//                     <div class="col">
//                         <div class="row text-muted">{product.title}</div>
                       
//                     </div>
//                     <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
//                     <div class="col"> €{product.price} <span class="close">&#10005;</span></div>
//                 </div>
//             </div>
            
//             <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
//         </div>
//         <div class="col-md-4 summary">
//             <div>
//                 <h5><b>Summary</b></h5>
//             </div>
           
//             <div class="row">
//                 <div class="col" style="padding-left:0;">ITEMS 3</div>
//                 <div class="col text-right">&euro; 132.00</div>
//             </div>
//             <form>
//                 <p>SHIPPING</p> <select>
//                     <option class="text-muted">Standard-Delivery- &euro;5.00</option>
//                 </select>
//                 <p>GIVE CODE</p> <input id="code" placeholder="Enter your code"/>
//             </form>
//             <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
//                 <div class="col">TOTAL PRICE</div>
//                 <div class="col text-right">&euro; 137.00</div>
//             </div> <button class="btn">CHECKOUT</button>
//         </div>
//     </div>
// </div>
                   
                )
            })
        }
        </div>
    )
}

export default Cart







