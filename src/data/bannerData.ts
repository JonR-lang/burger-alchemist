import DaBurger from "../assets/veggie-burg.png";

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
        link: string;
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
        picture: DaBurger,
        text: {
          heading: "Vegan?",
          body: "We got you! Bite into bliss with our delectable veggie burgers",
          link: "Shop now!",
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
          heading: "Vegan?",
          body: "We got you! Bite into bliss with our delectable veggie burgers",
          link: "Shop now!",
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
        picture: DaBurger,
        text: {
          heading: "Vegan?",
          body: "We got you! Bite into bliss with our delectable veggie burgers",
          link: "Shop now!",
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
          heading: "Vegan?",
          body: "We got you! Bite into bliss with our delectable veggie burgers",
          link: "Shop now!",
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
          heading: "Vegan?",
          body: "We got you! Bite into bliss with our delectable veggie burgers",
          link: "Shop now!",
        },
      },
    },
  ],
};
