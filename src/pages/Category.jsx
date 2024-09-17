import React from 'react'
import { useParams } from 'react-router'
import { ItemListContainer } from '../components';
import { useCategory } from '../hooks/useCategory';
import { useProductsbyCategory } from '../hooks/useProductsbyCategory';

export const Category = () => {
    const { categoryId } = useParams();

    const { products } = useProductsbyCategory(categoryId);
  return (
    <ItemListContainer products={products}/>
  )
}
