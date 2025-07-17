import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className="bg-white text-black pt-10 shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div className={isArabic ? "text-right md:text-right" : ""}>
          <img
            src="/logo.png"
            alt="AOL Logo"
            className={`mx-auto ${isArabic ? "md:ml-auto" : "md:mx-0"} h-14 md:h-16 mb-4 transition-transform duration-500 hover:scale-110`}
          />
          <p
            className={`text-gray-600 max-w-xs mx-auto ${
              isArabic ? "md:ml-auto md:text-right" : "md:mx-0"
            }`}
          >
            {t("footer.aboutText")}
          </p>
        </div>

        {/* Quick Links */}
        <div className={isArabic ? "text-right md:text-right" : ""}>
          <h4 className="text-lg font-semibold mb-4 text-primary">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-primary transition-colors duration-300"
              >
                {t("footer.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary transition-colors duration-300"
              >
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className="hover:text-primary transition-colors duration-300"
              >
                {t("footer.solutions")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors duration-300"
              >
                {t("footer.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className={isArabic ? "text-right md:text-right" : ""}>
          <h4 className="text-lg font-semibold mb-4 text-primary">
            {t("footer.contactUs")}
          </h4>
          {/* ✅ Numbers stay LTR */}
          <p className="text-gray-600 mb-2" style={{ direction: "ltr", textAlign: isArabic ? "right" : "left" }}>
            {t("footer.phone")}
          </p>
          <p className="text-gray-600 mb-4 ltr">{t("footer.email")}</p>

          {/* ✅ Social Icons always stay on the same side visually */}
          <div
            className={`flex mt-2 ${
              isArabic
                ? "justify-end md:justify-end space-x-2 rtl:space-x-reverse"
                : "justify-center md:justify-start space-x-2"
            }`}
            style={{ direction: "ltr" }}
          >

            <a
              href="javascript:void(0)"
              className="p-2 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="javascript:void(0)"
              className="p-2 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="javascript:void(0)"
              className="p-2 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="javascript:void(0)"
              className="p-2 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-200 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AOL. {t("footer.rights")}
      </div>
    </footer>
  );
}

export default Footer;
