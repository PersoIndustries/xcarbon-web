
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">xCarbon</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.solutionsLinks.plants")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.solutionsLinks.data")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.solutionsLinks.tokenization")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.solutionsLinks.marketplace")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.companyLinks.about")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.companyLinks.contact")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.companyLinks.blog")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.companyLinks.jobs")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} xCarbon. {t("footer.rights")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer.legal.privacy")}</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer.legal.terms")}</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("footer.legal.cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
