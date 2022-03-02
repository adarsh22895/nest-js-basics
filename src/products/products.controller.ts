import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService) {}

    @Post()
    addProduct(
        // @Body() completeBody : {title: string, description: string, price: number, available:boolean}
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
        const genratedId = this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice
        );  
        return {
            id : genratedId
        }
    }

    @Get('') 
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id') 
    getProduct(@Param('id') prodId: string){
            return this.productsService.getSingleProduct(prodId)

    }

    
}