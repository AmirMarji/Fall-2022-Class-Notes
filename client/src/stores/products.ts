import { api } from "./session";



export function getProducts() {
  return api<ListEnvelope<Product>>('products');
}

<<<<<<< HEAD
export function getProduct(id: string) {
  return api<Product>(`products/${id}`)
}

export function addProduct(product: Product) {
    return api<Product>(`products`, product);
}

export function updateProduct(id: string, product: Product) {
    return api<Product>(`products/${id}`, product, 'PATCH');
}

export function deleteProduct(id: string) {
    return api<{deletedCount:boolean}>(`products/${id}`,{}, 'DELETE');
}
=======
export function getProduct(id: number) {
  return api<Product>(`products/${id}`)
}

>>>>>>> d5e7c85e84c21e10b72fe00fea07f7497c92f7cf

export interface ListEnvelope<T> {
    products: T[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    _id: string
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }