import { Shield, FileText, Building2, Landmark, Award, Utensils, Wheat, FlaskConical, Droplets, Stethoscope, Package } from "lucide-react";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryAgriculture from "@/assets/gallery-agriculture.jpg";
import galleryOil from "@/assets/gallery-oil.jpg";
import galleryMedical from "@/assets/gallery-medical.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: galleryFood, alt: "فحص المواد الغذائية", title: "تفتيش المواد الغذائية" },
  { src: galleryLab, alt: "مختبر الفحوصات", title: "الفحوصات المخبرية" },
  { src: galleryAgriculture, alt: "فحص المنتجات الزراعية", title: "المنتجات الزراعية" },
  { src: galleryOil, alt: "فحص الزيوت والمشتقات النفطية", title: "الزيوت والنفط" },
  { src: galleryMedical, alt: "فحص المعدات الطبية", title: "المعدات الطبية" },
  { src: heroBg, alt: "مقر الشركة", title: "مقر الشركة" },
];

const services = [
  { icon: Utensils, label: "المواد الغذائية" },
  { icon: Wheat, label: "المنتجات الزراعية" },
  { icon: Package, label: "البضائع العامة" },
  { icon: Droplets, label: "الزيوت والمشتقات النفطية" },
  { icon: Stethoscope, label: "المعدات الطبية" },
  { icon: FlaskConical, label: "الفحوصات المخبرية" },
];

const Gallery = () => {
  return (
    <main className="pt-20">
      {/* Gallery Hero */}
      <section className="py-16 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 animate-fade-up">معرض الأعمال والمشاريع</h1>
          <p className="text-primary-foreground/70 text-lg animate-fade-up" style={{ animationDelay: "0.15s" }}>
            صور من أعمالنا في مجال التفتيش ومراقبة الجودة
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-luxury card-hover animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover image-hover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="p-5 font-heading text-sm font-bold text-primary-foreground">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Card */}
          <div className="bg-card rounded-2xl p-8 shadow-luxury card-hover animate-fade-up">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">خدماتنا</h3>
            <div className="w-12 h-1 bg-gradient-gold rounded-full mb-6" />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              نقدم خدمات التفتيش والمطابقة والفحص المخبري في مجالات متعددة لضمان أعلى معايير الجودة والسلامة.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Card */}
          <div className="bg-card rounded-2xl p-8 shadow-luxury card-hover animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">الاعتمادات الرسمية</h3>
            <div className="w-12 h-1 bg-gradient-gold rounded-full mb-6" />
            <div className="flex flex-col gap-4">
              {[
                { icon: FileText, label: "رقم الترخيص", value: "36921" },
                { icon: Building2, label: "السجل التجاري", value: "36921" },
                { icon: Shield, label: "الغرفة التجارية", value: "867" },
                { icon: Landmark, label: "حساب المصرف المركزي", value: "CBL8-103094", highlight: true },
                { icon: Award, label: "شهادة الاعتماد", value: "LIBAC-IB-064-21" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-3 rounded-lg ${
                    item.highlight ? "bg-gradient-gold shadow-gold" : "bg-secondary"
                  }`}
                >
                  <item.icon className={`w-5 h-5 shrink-0 ${item.highlight ? "text-accent-foreground" : "text-primary"}`} />
                  <div>
                    <p className={`text-xs ${item.highlight ? "text-accent-foreground/70" : "text-muted-foreground"}`}>{item.label}</p>
                    <p className={`font-heading text-sm font-bold ${item.highlight ? "text-accent-foreground" : "text-foreground"}`} dir="ltr">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
