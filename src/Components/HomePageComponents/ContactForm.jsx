import { useForm } from "react-hook-form";
import { SendSvg } from "../Svg/SvgContainer";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
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
      className="grid grid-cols-2 gap-10 xl:gap-12 2xl:gap-x-14 2xl:gap-y-16"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="text-lg font-medium mb-5 block">
          {t("full_name")}
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="name"
          type="text"
          placeholder={t("full_name_placeholder")}
          {...register("name", { required: t("full_name_required") })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="company_name"
          className="text-lg font-medium mb-5 block"
        >
          {t("company_name")}
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="company_name"
          type="text"
          placeholder={t("company_name_placeholder")}
          {...register("company_name", {
            required: t("company_name_required"),
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
          {t("email")}
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="email"
          type="email"
          placeholder={t("email_placeholder")}
          {...register("email", {
            required: t("email_required"),
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
          {t("phone")}
        </label>
        <input
          className="outline-none border-b block w-full pb-3"
          id="phone"
          type="number"
          placeholder={t("phone_placeholder")}
          {...register("phone", { required: t("phone_required") })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      {/* Service */}
      <div className="col-span-2">
        <label className="text-lg font-medium mb-5 block">{t("service")}</label>
        <select
          className="outline-none border-b block w-full pb-3"
          {...register("service", { required: t("service_required") })}
        >
          <option value=""> {t("service_placeholder")}</option>
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
          {t("message")}
        </label>
        <textarea
          className="outline-none border-b block w-full"
          id="message"
          placeholder={t("message_placeholder")}
          rows={4}
          {...register("message", { required: t("message_required") })}
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
        <span>{t("btn_text")}</span>
        <SendSvg />
      </button>
    </form>
  );
};

export default ContactForm;
