import { useState } from "react";
import { Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 animate-fade-up">اتصل بنا</h1>
          <p className="text-primary-foreground/70 text-lg animate-fade-up" style={{ animationDelay: "0.15s" }}>
            نسعد بتواصلكم معنا في أي وقت
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:0916611414"
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border shadow-luxury card-hover text-center">

                <Phone className="w-6 h-6 text-primary" />
                <span className="font-heading text-xs font-bold text-foreground">اتصل بنا</span>
                <span className="text-xs text-muted-foreground" dir="ltr">091-6611414</span>
              </a>
              <a
                href="mailto:info@firstbalance.ly"
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border shadow-luxury card-hover text-center">

                <Mail className="w-6 h-6 text-primary" />
                <span className="font-heading text-xs font-bold text-foreground">البريد الإلكتروني</span>
                <span className="text-xs text-muted-foreground">info@firstbalance.ly</span>
              </a>
              <a
                href="https://maps.google.com/?q=32.7633,12.7267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border border-border shadow-luxury card-hover text-center">

                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-heading text-xs font-bold text-foreground">الموقع</span>
                <span className="text-xs text-muted-foreground">الزاوية، ليبيا</span>
              </a>
            </div>

            {/* Address */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-luxury">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">العنوان</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                شارع جمال عبد الناصر، بجوار مباني الضمان، الزاوية، ليبيا
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="text-muted-foreground" dir="ltr">
                  <Phone className="w-4 h-4 inline ml-1 text-primary" />091-8932525
                </span>
                <span className="text-muted-foreground" dir="ltr">
                  <Phone className="w-4 h-4 inline ml-1 text-primary" />091-6611414
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-luxury border border-border h-64 lg:h-80">
              <iframe
                title="موقع الشركة"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.5!2d12.7267!3d32.7633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892b5a3a5a5a5%3A0x1!2sZawiya%2C+Libya!5e0!3m2!1sar!2sly!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-luxury">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">الاسم الكامل *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="أدخل اسمك الكامل" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="example@email.com"
                    dir="ltr" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">الموضوع</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    maxLength={200}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="موضوع الرسالة" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">الرسالة *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..." />

                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-luxury transition-all duration-300">

                  <Send className="w-4 h-4" />
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>);

};

export default Contact;