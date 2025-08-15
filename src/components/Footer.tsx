import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">ج</span>
              </div>
              <span className="text-2xl font-bold">مسارات الجامعات</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              دليلك الشامل لاختيار التخصص الجامعي المناسب وبناء مستقبل أكاديمي ناجح في أفضل الجامعات الأردنية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button variant="ghost" size="sm" className="hover:bg-white/10 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/10 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/10 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/10 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/80 hover:text-white transition-smooth">الرئيسية</a></li>
              <li><a href="/specializations" className="text-white/80 hover:text-white transition-smooth">التخصصات</a></li>
              <li><a href="/universities" className="text-white/80 hover:text-white transition-smooth">الجامعات</a></li>
              <li><a href="/career-test" className="text-white/80 hover:text-white transition-smooth">اختبار التوجيه</a></li>
              <li><a href="/guidance" className="text-white/80 hover:text-white transition-smooth">الإرشاد الأكاديمي</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-white/80">+962 6 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-white/80">info@uni-pathways.jo</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-white/80">عمان، الأردن</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">النشرة الإخبارية</h3>
            <p className="text-white/80">
              احصل على أحدث الأخبار والنصائح التعليمية
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="بريدك الإلكتروني"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-gradient-accent hover:opacity-90">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white/80">
          <p>&copy; 2024 مسارات الجامعات العربية. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-smooth">سياسة الخصوصية</a>
            <a href="/terms" className="hover:text-white transition-smooth">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;