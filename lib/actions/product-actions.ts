'use server' 

import { convertToPlainObject } from "../utils";
import { prisma } from '../../db/prisma';

export async function getAllProducts() {
    try {
        const products = await prisma.product.findMany();

        return convertToPlainObject(products)
    } catch(err) {
        console.log(Object(err))
    }
}

export async function getProductBySlug(slug: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { slug: slug }
        })

        return convertToPlainObject(product)
    } catch(err) {
        console.log(Object(err))
    }
}