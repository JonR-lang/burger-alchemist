import { Rating } from "@smastrom/react-rating";
import { motion } from "framer-motion";
import ReviewComp from "./ReviewComp";
import WriteReview from "./WriteReview";

const RatingsReview = () => {
  return (
    <div id='ratings-and-reviews' className='mt-1'>
      <div id='ratings' className='flex flex-col gap-2'>
        <h2 className='text-2xl lg:text-3xl font-bold'>Ratings and Reviews</h2>
        <div className='flex gap-3 md:gap-4 md:items-center flex-col md:flex-row'>
          <div className='flex gap-2 md:flex-1 justify-between md:flex-col items-center md:items-start'>
            <p className='text-4xl sm:text-6xl font-bold'>
              {"4.3"}
              <span className='text-xs font-normal text-neutral-500'>
                {" "}
                out of 5
              </span>
            </p>
            <div className='w-20 md:w-32'>
              <Rating
                style={{ width: "100%", objectFit: "contain" }}
                value={4}
                readOnly={true}
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-0 md:gap-1'>
            {Array(5)
              .fill(2)
              .map((item, i) => (
                <div key={i} className='flex items-center gap-2'>
                  <span className='flex items-center justify-between gap-[2px] w-10'>
                    {5 - i}
                    <Rating
                      style={{
                        maxWidth: 20,
                        objectFit: "contain",
                        marginTop: -4,
                      }}
                      value={1}
                      items={1}
                      readOnly={true}
                    />
                  </span>
                  <div
                    id='progress-bar'
                    className='bg-gray-300 h-[6px] md:h-2 rounded-full w-full overflow-hidden'>
                    <motion.div
                      id='progress-track'
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `80%`,
                        transition: { duration: 4 },
                      }}
                      viewport={{ once: true }}
                      className='h-full bg-neutral-600'></motion.div>
                  </div>
                  <p className='font-semibold text-sm'>45%</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div id='reviews' className='mt-6'>
        <div className='flex justify-between items-center text-sm text-neutral-500 mt-2'>
          <p className=''>{"13 reviews"}</p>
          <div className='md:hidden'>
            <WriteReview />
          </div>
        </div>
        <div className='py-2 flex flex-col gap-2'>
          {Array(3)
            .fill(3)
            .map((item, i) => (
              <ReviewComp key={i} index={i} />
            ))}
        </div>
        <div className='hidden md:block'>
          <WriteReview />
        </div>
      </div>
    </div>
  );
};

export default RatingsReview;
