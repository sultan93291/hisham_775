import { useForm } from "react-hook-form";
import { SendSvg } from "../Svg/SvgContainer";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-14 gap-y-16"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="text-lg font-medium mb-5 block">
          Full Name
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="name"
          type="text"
          placeholder="Enter Your Name"
          {...register("name", { required: "Full name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* Company Name */}
      {/* Company Name */}
      <div>
        <label
          htmlFor="company_name"
          className="text-lg font-medium mb-5 block"
        >
          Company Name
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="company_name"
          type="text"
          placeholder="Enter your company name"
          {...register("company_name", {
            required: "Company name is required",
          })}
        />
        {errors.company_name && (
          <span className="text-red-500 text-sm">
            {errors.company_name.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-lg font-medium mb-5 block">
          Email
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="email"
          type="email"
          placeholder="Enter Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="text-lg font-medium mb-5 block">
          Phone
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="phone"
          type="number"
          placeholder="Enter your Phone Number"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      {/* Service */}
      <div className="col-span-2">
        <label className="text-lg font-medium mb-5 block">Service</label>
        <select
          className="outline-none border-b block w-full pb-3"
          {...register("service", { required: "Please select a service" })}
        >
          <option value="">Select Service</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Service 3">Service 3</option>
        </select>
        {errors.service && (
          <span className="text-red-500 text-sm">{errors.service.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="col-span-2">
        <label htmlFor="message" className="text-lg font-medium mb-5 block">
          Message
        </label>
        <textarea
          className="outline-none border-b block w-full"
          id="message"
          placeholder="Enter Your thoughts"
          rows={4}
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex gap-2 items-center text-white bg-primary-blue duration-300 transition-all hover:bg-transparent border border-primary-blue rounded-lg py-3 text-center w-full justify-center col-span-2 mx-auto text-lg font-medium hover:text-primary-blue cursor-pointer"
      >
        <span>Submit</span>
        <SendSvg />
      </button>
    </form>
  );
};

export default ContactForm;
