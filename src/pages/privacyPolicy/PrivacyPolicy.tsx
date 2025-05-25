import { useFooterStore } from "@/context/useFooterStore";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useDocumentMetadata('Privacy Policy - CPU E-Book', 'Our privacy practices and data collection.');

  const { setFooterData } = useFooterStore();

  useEffect(() => localStorage.setItem('gdprBannerDismissed', "true"), []);

  useEffect(() => {
    setFooterData([]);
  }, [setFooterData]);

  const { t } = useTranslation("privacy");

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 font-bold text-gray-800 dark:text-white">
        {t("title")}
      </h1>

      <div className="text-lg text-gray-600 dark:text-gray-400 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("dataCollected.title")}</h2>
          <p>{t("dataCollected.content")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("cookies.title")}</h2>
          <p>{t("cookies.content")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("dataUsage.title")}</h2>
          <p>{t("dataUsage.content")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("dataSharing.title")}</h2>
          <p>{t("dataSharing.content")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("userRights.title")}</h2>
          <p>{t("userRights.content")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("contact.title")}</h2>
          <p>
            {t("contact.contentBeforeLink")}&nbsp;
            <Link to="/feedback/submit" className="text-blue-600 hover:underline dark:text-blue-400">
              {t("contact.feedbackLink")}
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
