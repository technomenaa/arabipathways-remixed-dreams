import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ج</span>
            </div>
            <span className="text-xl font-bold text-primary">مسارات الجامعات</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">الرئيسية</a>
            <a href="/specializations" className="text-foreground hover:text-primary transition-smooth">التخصصات</a>
            <a href="/universities" className="text-foreground hover:text-primary transition-smooth">الجامعات</a>
            <a href="/career-test" className="text-foreground hover:text-primary transition-smooth">اختبار التوجيه</a>
            <a href="/guidance" className="text-foreground hover:text-primary transition-smooth">الإرشاد الأكاديمي</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Search className="w-4 h-4 ml-2" />
              البحث
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
            <Button size="sm" className="bg-gradient-accent hover:opacity-90 shadow-button">
              انشاء حساب
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;