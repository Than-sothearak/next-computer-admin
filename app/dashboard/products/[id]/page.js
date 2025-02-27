'use client'
import * as React from 'react'
import ProductForm from "@/components/ProductForm";

export default function SingleProductPage ({params}) {
    const { id } = React.use(params)
    const categories = [
        "Laptops",
      ];
    return (  
        <ProductForm categories={categories} productId={id}/>
     )
  
}