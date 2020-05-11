import React from "react";
import { useTranslation } from "react-i18next";
import data from "../data";

function Footer() {
    const { i18n } = useTranslation();
    const currentLang = i18n.languages[0];
    const { footer } = data;

    return (
        <footer className="text-center">
            <div className="container">
            {footer[currentLang].text &&
                    <span className="footer-content content"
                    dangerouslySetInnerHTML={{ __html: footer[currentLang].text }}>
                    </span>
                 }
            </div>
        </footer>
    );
}

export default Footer;
