export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IAuthRespose {
  token: string;
}

export interface IOrder {
  id: number;
  name: string;
  user: string;
  date: string;
  product: string;
}

