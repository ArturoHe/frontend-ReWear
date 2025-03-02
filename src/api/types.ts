export interface User {
  id: number;
  username: string;
  image_perfil: string;
  description: string;
}

export interface Product {
  id: number;
  name_product: string;
  category: string;
  price: string;
  description: string;
  seller_id: number;
  status: string;
  publication_status: string;
  image_path: string;
}

export interface ProductCart {
  price: number | undefined;
  description: string;
  name_product: string;
  product_id: number;
}

export interface ProductResponse {
  idproduct: number;
  seller_id: number;
  username: string;
  name_product: string;
  price: string;
  description: string;
  category: string;
  status: number;
  image_path: string;
}

export interface ProductCreate {
  productId: number;
}

export interface LoginResponse {
  token: string;
}

export interface authResponse {
  username: string;
  id: string;
}
