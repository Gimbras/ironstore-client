import React from 'react'
import AddForm from './AddForm'
import {useState, useEffect} from 'react'

function ProductList() {

    const [product, setProducts] = useState()
    return (
        <div>
        <AddForm/>
        </div>
    )
}

export default ProductList