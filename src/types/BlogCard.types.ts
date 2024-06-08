export type BlogCardDetails = {
  _id: string;
  body: string;
  author: {
    firstName: string;
    lastName: string;
    picturePath: string;
    _id: string;
  };
  category: {
    _id: string;
    title: string;
  };
  title: string;
  views: number;
  likes: string[];
  images: {
    url: string;
    _id: string;
    publicId: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BlogCardType = Pick<
  BlogCardDetails,
  "_id" | "images" | "createdAt" | "author" | "title" | "body"
>;
