export type ProductCardDetails = {
  _id: string;
  name: string;
  images: {
    publicId: string;
    url: string;
    _id: string;
  }[];
  price: number;
  totalRatings: number;
  burgerType: string;
  description: string;
  quantity: number;
  ratings: string[];
  size: string;
  slug: string;
  sold: number;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  ingredients: { name: string; type: string }[];
};

export type ProductCardType = {
  name: string;
  images: {
    publicId: string;
    url: string;
    _id: string;
  }[];
  price: number;
  description: string;
  totalRatings: number;
};
