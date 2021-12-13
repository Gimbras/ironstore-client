import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {API_URL} from "../config";
import axios from 'axios'

function ProductList(props) {

    //const [allProducts, setAllProducts] = useState([]);
   /* useEffect(() => {
      async function getProducts() {
    const response = await axios.get(`${API_URL}/`, {withCredentials: true})
    setAllProducts(response.data)
  }

getProducts()
}, [])
*/

    const {products} = props

    // if(!products.length) {
    //     return <Spinner animation="grow" variant="dark" />
    // }

    return (
        <div>
            
            <p>Product List Component</p>
            {
                products.map((product) => {
                  
                    return (
                        <div>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default ProductList
