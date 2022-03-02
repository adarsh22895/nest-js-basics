import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";


@Injectable()
export class ProductsService {
    products : Product[] = [];
    
    insertProduct(title: string, desc : string, price: number) {
        const proId = Math.random().toString()
        const newProduct = new Product(proId , title, desc, price)
        this.products.push(newProduct);
        return proId
    }

    getProducts(){
        return [...this.products]
    }

    getSingleProduct(productId : string) {
        const product = this.products.find( prod => prod.id === productId )
        if(!product) {
            throw new NotFoundException('Could not found product');
        }
        return {...product}
    }
}