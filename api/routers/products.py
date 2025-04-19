from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List, Optional
from pydantic import BaseModel
import os

router = APIRouter()

# Pydantic models
class Product(BaseModel):
    id: str
    name: str
    price: float
    description: str
    category: str
    imageUrl: str
    stock: int = 0
    affiliate_link: Optional[str] = None

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    description: Optional[str] = None
    category: Optional[str] = None
    imageUrl: Optional[str] = None
    stock: Optional[int] = None
    affiliate_link: Optional[str] = None

# Sample data (in production, this would come from a database)
products = [
    Product(
        id="kit-solar-5kw-residencial", 
        name="Kit Solar 5kW Residencial Completo", 
        price=2499.99,
        description="Kit completo para instalación solar residencial de 5kW con paneles, inversor, baterías y accesorios de montaje.",
        category="Kits",
        imageUrl="/images/product-1.jpg",
        stock=10,
        affiliate_link="https://www.amazon.com/dp/B08F7R3QZT?tag=affiliateid-20"
    ),
    Product(
        id="panel-solar-monocristalino-400w", 
        name="Panel Solar Monocristalino 400W", 
        price=299.99,
        description="Panel solar monocristalino de alta eficiencia de 400W con 25 años de garantía.",
        category="Paneles",
        imageUrl="/images/product-2.jpg",
        stock=25,
        affiliate_link="https://www.amazon.com/dp/B07JZLNVJM?tag=affiliateid-20"
    ),
    Product(
        id="bateria-litio-48v-200ah", 
        name="Batería de Litio 48V 200Ah", 
        price=1899.99,
        description="Batería de litio de ciclo profundo para sistemas solares, 48V 200Ah con BMS integrado.",
        category="Baterías",
        imageUrl="/images/product-3.jpg",
        stock=5,
        affiliate_link="https://www.amazon.com/dp/B08QMW4ZHT?tag=affiliateid-20"
    ),
    Product(
        id="inversor-hybrid-8kw", 
        name="Inversor Hybrid 8kW", 
        price=1299.99,
        description="Inversor híbrido de 8kW para sistemas solares conectados a red con respaldo de baterías.",
        category="Inversores",
        imageUrl="/images/product-4.jpg",
        stock=8,
        affiliate_link="https://www.amazon.com/dp/B07VRR3CPS?tag=affiliateid-20"
    ),
]

@router.get("/", response_model=List[Product])
async def get_products(
    category: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    sort_by: Optional[str] = None
):
    """
    Get all products with optional filtering and sorting
    """
    result = products

    # Apply category filter
    if category:
        result = [product for product in result if product.category.lower() == category.lower()]
    
    # Apply price filters
    if min_price is not None:
        result = [product for product in result if product.price >= min_price]
    if max_price is not None:
        result = [product for product in result if product.price <= max_price]
    
    # Apply sorting
    if sort_by:
        if sort_by == "price_asc":
            result = sorted(result, key=lambda x: x.price)
        elif sort_by == "price_desc":
            result = sorted(result, key=lambda x: x.price, reverse=True)
        elif sort_by == "name":
            result = sorted(result, key=lambda x: x.name)
    
    return result

@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: str):
    """
    Get a specific product by its ID
    """
    for product in products:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail=f"Product with ID {product_id} not found")

@router.get("/category/{category}", response_model=List[Product])
async def get_products_by_category(category: str):
    """
    Get all products in a specific category
    """
    result = [product for product in products if product.category.lower() == category.lower()]
    if not result:
        raise HTTPException(status_code=404, detail=f"No products found in category: {category}")
    return result

@router.post("/", response_model=Product)
async def create_product(product: Product):
    """
    Create a new product (in production, this would be secured)
    """
    # Check if product ID already exists
    if any(p.id == product.id for p in products):
        raise HTTPException(status_code=400, detail=f"Product with ID {product.id} already exists")
    
    products.append(product)
    return product

@router.put("/{product_id}", response_model=Product)
async def update_product(product_id: str, product_update: ProductUpdate):
    """
    Update an existing product (in production, this would be secured)
    """
    for i, product in enumerate(products):
        if product.id == product_id:
            product_dict = product.dict()
            update_data = {k: v for k, v in product_update.dict().items() if v is not None}
            product_dict.update(update_data)
            updated_product = Product(**product_dict)
            products[i] = updated_product
            return updated_product
    
    raise HTTPException(status_code=404, detail=f"Product with ID {product_id} not found")

@router.delete("/{product_id}")
async def delete_product(product_id: str):
    """
    Delete a product (in production, this would be secured)
    """
    for i, product in enumerate(products):
        if product.id == product_id:
            del products[i]
            return {"message": f"Product with ID {product_id} deleted successfully"}
    
    raise HTTPException(status_code=404, detail=f"Product with ID {product_id} not found")
