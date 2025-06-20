export interface Dimensions {
  depth: number;
  height: number;
  width: number;
}

export interface Reviews {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface ApiClient {
  availabilityStatus: string;
}
