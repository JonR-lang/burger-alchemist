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
  ratings: {
    _id: string;
    star: number;
    comment: string;
    postedBy: {
      _id: string;
      firstName: string;
      lastName: string;
      picturePath: string;
    };
  }[];
  size: string;
  slug: string;
  sold: number;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  ingredients: { name: string; type: string }[];
};

export type ProductCardType = {
  _id: string;
  name: string;
  slug: string;
  images: {
    publicId: string;
    url: string;
    _id: string;
  }[];
  price: number;
  description: string;
  totalRatings: number;
};
