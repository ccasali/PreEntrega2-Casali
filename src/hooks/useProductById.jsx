import React from 'react'
import { getProductById } from '../services/products.service'

export const useProductById = () => {
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        getProductById(id).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.error(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
}

