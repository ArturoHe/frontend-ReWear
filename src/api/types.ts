export interface User {
  id: number;
  username: string;
  profileImage: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  publicationStatus: string;
  publicationDate: string;
}

export interface ProductResponse {
  id: number;
  seller_id: number;
  name_product: string;
  category: string;
  price: string;
  description: string;
  publication_status: string;
  publication_date: string;
}
