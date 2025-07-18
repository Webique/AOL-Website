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
    <footer id="footer" className="bg-white text-black pt-10 shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:grid md:grid-cols-3 gap-8 text-center md:text-left">
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
                href="#footer"
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

          {/* ✅ Clickable Phone */}
          <p className="text-gray-600 mb-2 text-center md:text-left" style={{ direction: "ltr" }}>
          <a
              href="tel:+966555439642"
              className="hover:text-primary underline"
            >
              📞 00966 555439642
            </a>
          </p>

          {/* ✅ Clickable Email */}
          <p className="text-gray-600 mb-4 text-center md:text-left" style={{ direction: "ltr" }}>
          <a
              href="mailto:info@artoflang.net"
              className="hover:text-primary underline"
            >
              ✉️ info@artoflang.net
            </a>
          </p>

          {/* Social Icons */}
          <div
            className={`flex justify-center md:justify-start gap-3 ${
              isArabic ? "md:justify-end" : ""
            }`}
            style={{ direction: "ltr" }}
          >
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              )
            )}
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
