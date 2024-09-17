import React from 'react'
import { useParams } from 'react-router'
import { ItemListContainer } from '../components';
import { useCategory } from '../hooks/useCategory';

export const Category = () => {
    const { categoryId } = useParams();

    const { categories } = useCategory();
  return (
    <ItemListContainer products={[]}/>
  )
}
