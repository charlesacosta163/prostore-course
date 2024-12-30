import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import ProductPrice from './product-price'
import { Product } from '@/types'

const ProductCard = ({product}: {product: Product}) => {
  return (
    <Card className='flex flex-col'>
        <CardHeader className='p-0 items-center flex-1'>
            <Link href={`/product/${product.slug}`}>
                <Image 
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    priority={true}
                />
            </Link>
        </CardHeader> 

        <CardContent className='p-4 grid gap-4 self-stretch'>
            
            <div className="text-xs">{product.brand}</div>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>

            <div className="flex-between gap-4">
                <p>{(product.rating).toString()} Stars</p>
                { product.stock > 0 ? (
                    <ProductPrice value={Number(product.price)} />
                ): (
                    <p className="text-destructive">Out of Stock</p>
                )}
            </div>
        </CardContent>
    </Card>
  )
}

export default ProductCard