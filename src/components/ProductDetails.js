import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from "../config"
import "./ProductDetails.css"



function ProductDetail() {
    // We get this 'todoId' from the <Route path="/todo/:todoId "> we defined in App.js
    const {productId} = useParams()

    const [productDetail, setProductDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/${productId}`, {withCredentials: true})
           console.log(response.data)
           setProductDetail(response.data)
        }
        getData()
    }, [])

    // // Ensuring only logged in users see the page
    // if (!props.user) {
    //     return <Navigate to="/signin" />
    // }

    if(!productDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

   

    return (
        <section id="home" class="section-showcase">
      <div class="container">
        <div class="text">
          <h1>{productDetail.title}</h1>
          <h2>{productDetail.price}€</h2>
           
          <h2>{productDetail.categories}</h2>
           
          <h2>{productDetail.desc}</h2>
        </div>
        <img class="cullen" src={productDetail.img} alt="Product img" />
      </div>
    </section>
        
    )
}

export default ProductDetail


