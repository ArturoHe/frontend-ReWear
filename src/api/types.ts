export interface User {
  id: number;
  username: string;
  profileImage: string;
  description: string;
}

export interface Product {
  id: number;
  name_product: string;
  category: string;
  price: number;
  description: string;
  seller_id: number;
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
