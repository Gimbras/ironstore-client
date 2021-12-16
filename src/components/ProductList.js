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
import { fontSize } from '@mui/system';
import Search from "./Search"
import {useState} from 'react'


function ProductList(props) {

    const {products} = props
    const [allProducts, setAllProducts] = useState(products)
   

    function handleSearch(event){
        let word = event.target.value
        let filteredProducts = products.filter((element)=> {
          return element.title.includes(word)
        })
    
        setAllProducts(filteredProducts)
      }
    
   
    return (
        <>
        <div>
             <Search btnSearch={handleSearch}/>
          
            {
                allProducts.map((product) => {
                  
                    return (
                        <div class="card1">
                        <Grid class="pleasework" >
                       
                        <card class="uchoose">  </card>
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
                               <CardActions>
                               <Button  size="small"><AddCircleRoundedIcon /></Button>
                                    </CardActions>
                            </Card>
                            </Grid>  
                          
                        </div>    
                    )
                })
            }
        </div>
      <Link class="addshit" to={"/add-form"} style={{textDecoration: "none", color: "grey"}} ><AddCircleRoundedIcon style={{fontSize:"2.5rem"}}/></Link> 
       </>
    )
}

export default ProductList

