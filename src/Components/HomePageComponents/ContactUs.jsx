import { EmailSvg, PhoneSvg } from "../Svg/SvgContainer";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="pb-40">
      <div className="container">
        <div className="grid grid-cols-12">
          {/* Left side */}
          <div className="col-span-4">
            <div className="flex gap-3 items-center mb-5">
              <h3 className="sub_title">Contact Us</h3>
            </div>
            <h2 className="text-4xl font-semibold">
              We’d Love to Hear from You
            </h2>
            <p className="mt-5 mb-8 text-secondary-gray text-xl leading-[165%]">
              Have a project in mind or need more info? Fill out the form and
              our team will get back to you shortly.
            </p>
            {/* btns */}
            <div className="flex gap-5 items-center">
              {/* Phone */}
              <p className="flex gap-2 items-center px-16 cursor-pointer py-3 rounded-xl border border-primary-blue text-primary-blue font-medium transition-all duration-300 hover:bg-primary-blue hover:text-white">
                <PhoneSvg />
                <span>Call Us</span>
              </p>

              {/* Email */}
              <p className="flex gap-2 items-center px-16 cursor-pointer py-3 rounded-xl border border-primary-blue text-primary-blue font-medium transition-all duration-300 hover:bg-primary-blue hover:text-white">
                <EmailSvg />
                <span>Mail Us</span>
              </p>
            </div>
          </div>
          {/* Empty */}
          <div className="col-span-1"></div>

          {/* Right Side */}
          <div className="col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
