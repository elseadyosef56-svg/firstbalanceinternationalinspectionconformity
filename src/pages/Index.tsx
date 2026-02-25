import { Shield, FileText, Building2, Landmark, Award, CalendarDays } from "lucide-react";
import CredentialCard from "@/components/CredentialCard";
import companyLogo from "@/assets/company-logo.jpeg";

const credentials = [
  { icon: FileText, label: "رقم الترخيص", value: "36921" },
  { icon: Building2, label: "السجل التجاري", value: "36921" },
  { icon: Shield, label: "الغرفة التجارية", value: "867" },
  { icon: Landmark, label: "حساب المصرف المركزي", value: "CBL8-103094", highlight: true },
  { icon: Award, label: "شهادة الاعتماد", value: "LIBAC-IB-064-21" },
  { icon: CalendarDays, label: "سنة التأسيس", value: "2021" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-navy">
        <div className="relative container mx-auto text-center py-32">
          <div className="mb-10 animate-fade-up">
            <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-2xl bg-white/95 p-3 shadow-lg shadow-black/20 backdrop-blur-sm">
              <img src={companyLogo} alt="شعار شركة التوازن الأول للتفتيش والمطابقة الدولية" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">First Balance for Inspection & Conformity</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            شركة التوازن الأول
            <br />
            <span className="text-gradient-gold">للتفتيش والمطابقة الدولية</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            نقدم أعلى معايير الجودة والتفتيش والمطابقة الدولية لضمان سلامة المنتجات والخدمات
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a href="/gallery" className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-bold text-sm shadow-gold hover:brightness-110 transition-all duration-300">
              معرض أعمالنا
            </a>
            <a href="/contact" className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-heading font-bold text-sm hover:bg-primary-foreground/10 transition-all duration-300">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              الاعتمادات الرسمية
            </h2>
            <div className="w-20 h-1 bg-gradient-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <CredentialCard {...cred} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
