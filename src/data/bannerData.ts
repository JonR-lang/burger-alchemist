import DaBurger from "../assets/hero-2.png";
import ShadowVeil from "../assets/shadow-veil-burger.png";
import VeganBurger from "../assets/vegan-burger.png";

export type BannerData = {
  delay: number;
  hideOnMobile: boolean;
  structure: {
    template: string;
    colorObj: {
      neutral: string;
      primary: string;
      textHeading: string;
      textBody: string;
    };
    data: {
      picture: string;
      text: {
        heading: string;
        body: string;
        link: {
          callToAction: string;
          url: string;
        };
      };
    };
  }[];
};

export const bannerOneData = {
  delay: 3500,
  hideOnMobile: false,
  structure: [
    {
      template: "one",
      colorObj: {
        neutral: "#e3edcb",
        primary: "#9bc74cb3",
        textHeading: "#014e19",
        textBody: "#014e19",
      },
      data: {
        picture: VeganBurger,
        text: {
          heading: "Vegan?",
          body: "We got you! Bite into bliss with our delectable veggie burgers",
          link: {
            callToAction: "Order Now",
            url: "/products?dietaryPreference=Vegan",
          },
        },
      },
    },
    {
      template: "two",
      colorObj: {
        neutral: "#fabe4c",
        primary: "#ed9e1d",
        textHeading: "#fff",
        textBody: "#fff",
      },
      data: {
        picture: DaBurger,
        text: {
          heading: "Triple Trouble",
          body: "Experience the ultimate trio of flavors with our mouth-watering triplex burgers. Perfect for any craving!",
          link: {
            callToAction: "Shop Now!",
            url: "/products?size=triple",
          },
        },
      },
    },
    {
      template: "three",
      colorObj: {
        neutral: "#d3d3d359",
        primary: "#b12c17",
        textHeading: "#b12c17",
        textBody: "#b12c17",
      },
      data: {
        picture: ShadowVeil,
        text: {
          heading: "Shadow Veil",
          body: "This is the black man. You do not eat the black man. The black man eats you.",
          link: {
            callToAction: "Taste me!",
            url: "/products/660d3a35f04eb5b35063f1f4",
          },
        },
      },
    },
  ],
};

export const bannerTwoData = {
  delay: 4500,
  hideOnMobile: true,
  structure: [
    {
      template: "one",
      colorObj: {
        neutral: "#e3edcb",
        primary: "#9bc74cb3",
        textHeading: "#014e19",
        textBody: "#014e19",
      },
      data: {
        picture: DaBurger,
        text: {
          heading: "Triple Trouble",
          body: "Experience the ultimate trio of flavors with our mouth-watering triplex burgers. Perfect for any craving!",
          link: {
            callToAction: "Shop Now!",
            url: "/products?size=triple",
          },
        },
      },
    },
    {
      template: "two",
      colorObj: {
        neutral: "#fabe4c",
        primary: "#ed9e1d",
        textHeading: "#fff",
        textBody: "#fff",
      },
      data: {
        picture: ShadowVeil,
        text: {
          heading: "Shadow Veil",
          body: "This is the black man. You do not eat the black man. The black man eats you.",
          link: {
            callToAction: "Submit yourself.",
            url: "/products/660d3a35f04eb5b35063f1f4",
          },
        },
      },
    },
  ],
};
