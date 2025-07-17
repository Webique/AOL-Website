import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/pattern1.png";
import aboutImage from "../assets/about-illustration.png";
import { useTranslation } from "react-i18next"; // ✅ ADD THIS
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import scholarshipImage from "../assets/scholarship-illustration.png";
import customizedImage from "../assets/customized-illustration.png"

export default function Home() {

  const { t, i18n } = useTranslation(); // ✅ ADD THIS
  const isArabic = i18n.language === "ar"; // ✅ ADD THIS
  return (
    <div className="pt-20">
     {/* ✅ Hero Section */}
<section
  id="hero"
  className="relative w-full bg-gray-100 flex justify-center items-center"
  style={{ height: "auto" }}
>
  <motion.img
    src={heroImage}
    alt="AOL Hero"
    className="w-full h-auto max-h-screen md:max-h-[90vh] object-contain md:object-cover"
    initial={{ opacity: 0, scale: 1.02 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />
</section>



      {/* ✅ About Section */}
      <section
  id="about"
  className="relative bg-white py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto ${
      isArabic ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* About Image */}
    <motion.img
      src={aboutImage}
      alt="About AOL"
      className="w-full md:w-1/2 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />

    {/* About Text */}
    <motion.div
      className={`md:w-1/2 ${isArabic ? "text-right" : "text-left"}`}
      initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        {t("aboutSection.title")}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        {t("aboutSection.para1")}
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("aboutSection.para2")}
      </p>
    </motion.div>
  </div>
</section>

<section
  id="vision"
  className="relative bg-gray-50 py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Decorative Background Shape */}
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 max-w-5xl mx-auto ${
      isArabic ? "text-right" : "text-left"
    }`}
  >
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-primary mb-10"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {t("visionSection.title")}
    </motion.h2>

    {/* ✅ Vision */}
    <motion.div
      initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold text-dark mb-3">
        {t("visionSection.visionTitle")}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("visionSection.visionText")}
      </p>
    </motion.div>

    {/* ✅ Mission */}
    <motion.div
      initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-2xl font-semibold text-dark mb-3">
        {t("visionSection.missionTitle")}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        {t("visionSection.missionText1")}
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("visionSection.missionText2")}
      </p>
    </motion.div>
  </div>
</section>

<section
  id="values"
  className="relative bg-[#f0f6fb] py-20 px-6 md:px-16 overflow-hidden"

>
  {/* Decorative Background */}
  <div className="absolute top-10 right-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 max-w-6xl mx-auto ${
      isArabic ? "text-right" : "text-left"
    }`}
  >
    <motion.h2
      className={`text-3xl md:text-4xl font-bold text-primary mb-12 ${
        isArabic ? "text-center md:text-right" : "text-center md:text-left"
      }`}
      
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {t("valuesSection.title")}
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Value 1 */}
      <motion.div
        initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-dark mb-2">
          {t("valuesSection.excellenceTitle")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("valuesSection.excellenceText")}
        </p>
      </motion.div>

      {/* Value 2 */}
      <motion.div
        initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-dark mb-2">
          {t("valuesSection.innovationTitle")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("valuesSection.innovationText")}
        </p>
      </motion.div>

      {/* Value 3 */}
      <motion.div
        initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-dark mb-2">
          {t("valuesSection.empowermentTitle")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("valuesSection.empowermentText")}
        </p>
      </motion.div>

      {/* Value 4 */}
      <motion.div
        initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-dark mb-2">
          {t("valuesSection.collaborationTitle")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("valuesSection.collaborationText")}
        </p>
      </motion.div>
    </div>
  </div>
</section>

<section
  id="solutions"
  className="relative bg-[#f8fbff] py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 max-w-6xl mx-auto ${
      isArabic ? "text-right" : "text-left"
    }`}
  >
    {/* Section Title */}
    <motion.h2
      className={`text-3xl md:text-4xl font-bold text-primary mb-12 ${
        isArabic ? "text-center md:text-right" : "text-center md:text-left"
      }`}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {t("solutionsSection.title")}
    </motion.h2>

    {/* ✅ General Solutions */}
    <motion.div
      initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold text-dark mb-4">
        {t("solutionsSection.generalTitle")}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {t("solutionsSection.generalIntro")}
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <img src={icon1} alt="General Training" className="w-16 h-16 rounded-full shadow-md"
 />
          <div>
            <p className="font-semibold text-dark">
              {t("solutionsSection.general1Title")}
            </p>
            <p className="text-gray-700">{t("solutionsSection.general1Text")}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src={icon2} alt="Contractual Training" className="w-16 h-16 rounded-full shadow-md"
 />
          <div>
            <p className="font-semibold text-dark">
              {t("solutionsSection.general2Title")}
            </p>
            <p className="text-gray-700">{t("solutionsSection.general2Text")}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src={icon3} alt="Specialized Workshops" className="w-16 h-16 rounded-full shadow-md"
 />
          <div>
            <p className="font-semibold text-dark">
              {t("solutionsSection.general3Title")}
            </p>
            <p className="text-gray-700">{t("solutionsSection.general3Text")}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src={icon4} alt="Executive Education" className="w-16 h-16 rounded-full shadow-md"
 />
          <div>
            <p className="font-semibold text-dark">
              {t("solutionsSection.general4Title")}
            </p>
            <p className="text-gray-700">{t("solutionsSection.general4Text")}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src={icon5} alt="Language Proficiency" className="w-16 h-16 rounded-full shadow-md"
 />
          <div>
            <p className="font-semibold text-dark">
              {t("solutionsSection.general5Title")}
            </p>
            <p className="text-gray-700">{t("solutionsSection.general5Text")}</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* ✅ Training Solutions */}
    <motion.div
      initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-semibold text-dark mb-4">
        {t("solutionsSection.trainingTitle")}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {t("solutionsSection.trainingIntro")}
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>{t("solutionsSection.training1")}</li>
        <li>{t("solutionsSection.training2")}</li>
        <li>{t("solutionsSection.training3")}</li>
        <li>{t("solutionsSection.training4")}</li>
        <li>{t("solutionsSection.training5")}</li>
        <li>{t("solutionsSection.training6")}</li>
        <li>{t("solutionsSection.training7")}</li>
        <li>{t("solutionsSection.training8")}</li>
        <li>{t("solutionsSection.training9")}</li>
      </ul>
    </motion.div>
  </div>
</section>

<section
  id="scholarship"
  className="relative bg-white py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto ${
      isArabic ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* ✅ Image */}
    <motion.img
      src={scholarshipImage}
      alt="External Scholarship"
      className="w-full md:w-1/2 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />

    {/* ✅ Text */}
    <motion.div
      className={`md:w-1/2 ${isArabic ? "text-right" : "text-left"}`}
      initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        {t("scholarshipSection.title")}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        {t("scholarshipSection.para1")}
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        {t("scholarshipSection.para2")}
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("scholarshipSection.para3")}
      </p>
    </motion.div>
  </div>
</section>

<section
  id="customized"
  className="relative bg-[#f8fbff] py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto ${
      isArabic ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* ✅ Image */}
    <motion.img
      src={customizedImage}
      alt="Customized Programs"
      className="w-full md:w-1/2 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />

    {/* ✅ Text */}
    <motion.div
      className={`md:w-1/2 ${isArabic ? "text-right" : "text-left"}`}
      initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        {t("customizedSection.title")}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("customizedSection.para1")}
      </p>
    </motion.div>
  </div>
</section>

<section
  id="contact"
  className="relative bg-white py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>

  <div
    className={`relative z-10 max-w-4xl mx-auto text-center ${
      isArabic ? "text-right md:text-right" : "text-center md:text-left"
    }`}
  >
    <motion.h2
      className={`text-3xl md:text-4xl font-bold text-primary mb-12 ${
        isArabic ? "md:text-right" : "md:text-left"
      }`}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {t("contactSection.title")}
    </motion.h2>

    <div className="space-y-6">
      {/* ✅ Phone */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
      >
        <p className="text-lg font-semibold text-dark mb-2">
          {t("contactSection.phoneTitle")}
        </p>
        <a
          href="tel:+966555439642"
          className="text-primary text-lg font-medium hover:underline"
          style={{ direction: "ltr" }}
        >
          00966 555439642
        </a>
      </motion.div>

      {/* ✅ Email */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
      >
        <p className="text-lg font-semibold text-dark mb-2">
          {t("contactSection.emailTitle")}
        </p>
        <a
          href="mailto:info@artoflang.net"
          className="text-primary text-lg font-medium hover:underline"
          style={{ direction: "ltr" }}
        >
          info@artoflang.net
        </a>
      </motion.div>

      {/* ✅ Website */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
      >
        <p className="text-lg font-semibold text-dark mb-2">
          {t("contactSection.websiteTitle")}
        </p>
        <a
          href="https://www.artoflang.net"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-lg font-medium hover:underline"
        >
          www.artoflang.net
        </a>
      </motion.div>
    </div>
  </div>
</section>





    </div>
  );
}
