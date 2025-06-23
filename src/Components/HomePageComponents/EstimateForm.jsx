import { useForm } from "react-hook-form";
import { BackSvg, SendSvg } from "../Svg/SvgContainer";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const EstimateForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-7 sm:gap-10 xl:gap-12 2xl:gap-x-14 2xl:gap-y-16"
      >
        {/* Select Business Type */}
        <div className="col-span-2 md:col-span-1">
          <label className="text-lg font-medium mb-2 lg:mb-5 block">
            {t("services_type")}
          </label>
          <select
            className="outline-none border-b block w-full pb-3"
            {...register("service_type", {
              required: t("service_type_required"),
            })}
          >
            <option value="">{t("service_placeholder")}</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
          {errors.service_type && (
            <span className="text-red-500 text-sm">
              {errors.service_type.message}
            </span>
          )}
        </div>

        {/* Select Campaign Objective */}
        <div className="col-span-2 md:col-span-1">
          <label className="text-lg font-medium mb-2 lg:mb-5 block">
            {t("campaign")}
          </label>
          <select
            className="outline-none border-b block w-full pb-3"
            {...register("service_type", {
              required: t("campaign_required"),
            })}
          >
            <option value="">{t("service_placeholder")}</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
          {errors.service_type && (
            <span className="text-red-500 text-sm">
              {errors.service_type.message}
            </span>
          )}
        </div>

        {/* Select Daily Budget */}
        <div className="col-span-2">
          <label className="text-lg font-medium mb-2 lg:mb-5 block">
            {t("daily_budget")}
          </label>
          <select
            className="outline-none border-b block w-full pb-3"
            {...register("service", { required: t("budget_required") })}
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

        {/* Buttons */}
        <div className="flex gap-5 w-full col-span-2 flex-col md:flex-row">
          <Link
            onClick={e => e.stopPropagation}
            className="flex gap-2 items-center duration-300 transition-all border border-primary-blue rounded-lg py-2.5 sm:py-3 text-center w-full md:flex-1 justify-center col-span-2 mx-auto text-lg font-medium text-primary-blue cursor-pointer"
            to="/"
          >
            <BackSvg />
            <span>{t("btn_text2")}</span>
          </Link>
          <button
            type="submit"
            className="flex gap-2 items-center text-white bg-primary-blue duration-300 transition-all hover:bg-transparent border border-primary-blue rounded-lg py-2.5 sm:py-3 text-center w-full md:flex-1 justify-center col-span-2 mx-auto text-lg font-medium hover:text-primary-blue cursor-pointer"
          >
            <span>{t("btn_text")}</span>
            <SendSvg />
          </button>
        </div>
      </form>
    </>
  );
};

export default EstimateForm;
