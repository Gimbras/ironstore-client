import {useState, useEffect} from 'react'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'


function ProductDetail() {
    // We get this 'todoId' from the <Route path="/todo/:todoId "> we defined in App.js
    const {productId} = useParams()

    const [productDetail, setProductDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get('/products/${productId}', {withCredentials: true})
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
        <div>
            <h2>Product Details </h2>
            <h4>Name: {productDetail.title}</h4>
            <h4>Price: {productDetail.price}</h4>
            <h4>Categories: {productDetail.categories}</h4>
            <h4>Description: {productDetail.desc}</h4>
            <img src={productDetail.image} />

           
        </div>
    )
}

export default ProductDetail