import ContactForm from "@/components/ContactForm";
import { FaPhone, FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='space-y-4'>
        <div className='max-w-3xl w-full mx-auto text-center py-4 flex flex-col gap-4 text-amber-900'>
          <h1 className='text-4xl font-semibold'>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
            illum nisi. Nulla alias hic, repellendus consequatur, enim, nesciunt
            ?
          </p>
        </div>

        <div className='flex max-w-3xl mx-auto border p-2 rounded-2xl flex-col md:flex-row'>
          <div className='flex-1 burger-pattern rounded-xl overflow-hidden'>
            <div className='p-4 bg-primary-two/80 w-full h-full text-amber-900 flex flex-col gap-4'>
              <h3 className='font-semibold text-xl md:text-base'>
                Contact information
              </h3>
              <p className='md:text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
                repellat.
              </p>
              <div className='flex flex-col gap-4 flex-1'>
                <span className='flex items-center gap-1 md:text-xs'>
                  <FaPhone fontSize={20} aria-hidden={true} />
                  08063197455
                </span>
                <span className='flex items-center gap-1 md:text-xs'>
                  <IoMail fontSize={20} aria-hidden={true} />
                  iroelejohnny@outlook.com
                </span>
                <span className='flex items-center gap-1 md:text-xs'>
                  <FaLocationDot fontSize={20} aria-hidden={true} />
                  Abuja, Nigeria
                </span>
              </div>
              <div className='flex gap-2 text-amber-900 self-center'>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'>
                  <FaFacebookSquare fontSize={25} aria-hidden={true} />
                </a>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'>
                  <FaTwitterSquare fontSize={25} aria-hidden={true} />
                </a>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'>
                  <FaSquareInstagram fontSize={25} aria-hidden={true} />
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className='w-full mb-2'>
        <h2 className='text-xl font-semibold text-center mb-3 text-amber-900'>
          Find us!
        </h2>
        <div className='w-full max-w-7xl mx-auto'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31790.556786991216!2d7.317500789001029!3d5.132736214011246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429bcf78b0f7d5%3A0xb90d53e8b3113917!2sAbayi%2C%20Aba%2C%20Abia!5e0!3m2!1sen!2sng!4v1710834824221!5m2!1sen!2sng'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
