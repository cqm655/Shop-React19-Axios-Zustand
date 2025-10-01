export interface Dimensions {
  depth: number;
  height: number;
  width: number;
}

export interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface Products {
  availabilityStatus: string;
  brand: string;
  category: string;
  reviews: Review[];
  dimensions: Dimensions;
  discountPercentage: number;
  images: string[];
  meta: string;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  stock: number;
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
  id: number;
}

export interface ApiResponse<T> {
  products: T;
}
