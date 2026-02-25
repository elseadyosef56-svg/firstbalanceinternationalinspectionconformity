import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import companyLogo from "@/assets/company-logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/gallery", label: "معرض الأعمال" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-luxury">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-md group-hover:shadow-gold transition-shadow duration-300">
            <img src={companyLogo} alt="شعار شركة التوازن الأول" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-heading text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
              التوازن الأول
            </h1>
            <p className="text-[11px] text-muted-foreground font-medium">للتفتيش والمطابقة الدولية</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2.5 rounded-lg font-heading text-sm font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "text-foreground hover:bg-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          aria-label="القائمة"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3 rounded-lg font-heading text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
