import { Shield, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold">التوازن الأول</h3>
                <p className="text-xs text-primary-foreground/70">للتفتيش والمطابقة الدولية</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              First Balance for Inspection & Conformity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-accent mb-4">روابط سريعة</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">الرئيسية</Link>
              <Link to="/gallery" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">معرض الأعمال</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">اتصل بنا</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-accent mb-4">التواصل</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span dir="ltr">091-6611414
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>الزاوية، ليبيا</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} شركة التوازن الأول للتفتيش والمطابقة الدولية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>);
};

export default Footer;