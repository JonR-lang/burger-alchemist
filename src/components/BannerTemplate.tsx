import { useNavigate } from "react-router-dom";

type BannerProp = {
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
};

const BannerTemplate = ({
  template,
  colorObj: { primary, neutral, textHeading, textBody },
  data: {
    picture,
    text: { heading, body, link },
  },
}: BannerProp) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: neutral }}
      className={`overflow-hidden flex-1 rounded relative flex p-2 min-h-[18rem] md:min-h-80`}>
      {/* Heading */}
      <h3
        style={{ color: textHeading }}
        className={`${
          template === "one" &&
          `text-2xl sm:text-3xl font-bold font-rubik-dirt absolute z-20 top-3 left-2`
        } ${
          template === "two" &&
          `text-2xl sm:text-3xl font-bold font-rubik-dirt absolute z-30 top-3 left-2`
        } ${
          template === "three" &&
          `text-2xl sm:text-3xl font-bold font-rubik-dirt absolute z-20 bottom-[27%] left-[50%] translate-y-[80%] lg:translate-y-[50%]
          translate-x-[-50%] w-full text-center`
        }`}>
        {heading}
      </h3>

      {/* body */}
      <p
        style={{ color: textBody }}
        className={`${
          template === "one" &&
          `text-sm absolute z-30 top-[50%] translate-y-[-123%] drop-shadow left-2 max-w-[200px] portrait:lg:max-w-[190px]`
        } ${
          template === "two" &&
          `text-sm absolute z-30 top-[30%] lg:top-[50%] translate-y-[-75%] sm:translate-y-[-100%] lg:translate-y-[-50%] drop-shadow lg:right-1 xl:right-3 lg:max-w-[110px] xl:max-w-[150px]`
        } ${template === "three" && "hidden"}`}>
        {body}
      </p>

      {/* link */}
      <button
        style={{ color: textBody }}
        onClick={() => navigate(link.url)}
        className={`block underline absolute z-[30] cursor-pointer text-sm ${
          template === "one" &&
          `bottom-12 md:bottom-7 left-2 md:left-auto md:right-10 `
        } ${template === "two" && `bottom-8 right-2 `} ${
          template === "three" &&
          `bottom-7 right-[50%] lg:right-7 translate-x-[50%] lg:translate-x-0 `
        }`}>
        {link.callToAction}
      </button>

      {/* picture */}
      <figure
        className={`absolute ${
          template === "one" &&
          "bg-white rounded-tl-[130px] h-[60%] lg:h-3/4 w-[200px]  lg:w-[300px] rounded-xl bottom-2 right-2 shadow"
        } overflow-hidden flex place-content-center z-20  ${
          template === "two" &&
          "bg-white w-[180px] lg:w-[250px] aspect-[2/1.6] left-[20%] top-[35%] lg:top-[25%] rounded-sm rounded-tr-[70px] lg:rounded-tr-[100px] rounded-bl-[70px] lg:rounded-bl-[100px] shadow"
        } ${
          template === "three" &&
          `size-[200px]  left-[50%] top-[0] translate-x-[-50%]`
        }`}>
        <div
          style={{ background: primary }}
          className={`${
            template === "three"
              ? "absolute block w-[60%] h-[60%] top-0 -z-20"
              : "hidden"
          } `}></div>
        <img
          src={picture}
          alt={heading}
          className={`size-full object-contain ${
            template === "three" && "relative top-5"
          }`}
        />
      </figure>

      {/* The remaining three divs are for styling */}
      <div
        style={{ background: primary }}
        className={`absolute ${
          template === "two"
            ? "block w-[180px] lg:w-[250px] aspect-[2/1.6] left-[15%] top-[30%] lg:top-[20%]  rounded-sm rounded-tr-[70px] lg:rounded-tr-[100px] rounded-bl-[70px] lg:rounded-bl-[100px] z-10"
            : "hidden"
        } `}></div>

      <div
        style={{ background: primary }}
        className={`absolute z-10  ${
          template === "one" && `rounded-tr-[130px] h-full w-[85%] left-0 top-0`
        }  ${
          template === "two" &&
          `bottom-0 right-0 w-2/3 h-1/2 rounded-tl-[100px]`
        }`}></div>

      <div
        style={{ background: template === "one" ? neutral : primary }}
        className={`absolute  ${
          template === "one" &&
          `h-10 lg:h-14 bottom-0 left-0 w-full rounded-tr-full`
        } ${
          template === "two" && `top-0 right-0 size-14 lg:size-20`
        }  z-20`}></div>
    </div>
  );
};

export default BannerTemplate;
