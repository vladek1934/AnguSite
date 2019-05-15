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
