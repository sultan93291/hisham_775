import { useForm } from "react-hook-form";
import { SendSvg } from "../Svg/SvgContainer";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const EstimateForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const onSubmit = data => {
    toast.promise(emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY), {
      loading: "Sending...",
      success: () => {
        reset();
        return "Message sent successfully!";
      },
      error: "Something went wrong. Please try again.",
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-7 sm:gap-10 xl:gap-12 2xl:gap-x-14 2xl:gap-y-16"
      >
        {/* Service */}
        <div className="col-span-2">
          <label className="text-lg font-medium mb-2 lg:mb-5 block">
            {t("service")}
          </label>
          <select
            className="outline-none border-b block w-full pb-3"
            {...register("service", { required: t("service_required") })}
          >
            <option value="">{t("service_placeholder")}</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm">
              {errors.service.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex gap-2 items-center text-white bg-primary-blue duration-300 transition-all hover:bg-transparent border border-primary-blue rounded-lg py-2.5 sm:py-3 text-center w-full justify-center col-span-2 mx-auto text-lg font-medium hover:text-primary-blue cursor-pointer"
        >
          <span>{t("btn_text")}</span>
          <SendSvg />
        </button>
      </form>
    </>
  );
};

export default EstimateForm;
