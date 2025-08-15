import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/specializations?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="الحرم الجامعي" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            اكتشف مستقبلك
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              الأكاديمي
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            دليلك الشامل لاختيار التخصص الجامعي المناسب في الأردن. اكتشف شغفك وابني مستقبلك المهني مع أفضل الجامعات الأردنية.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input 
                  placeholder="ابحث عن التخصص الذي يناسبك..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 pr-12 py-3"
                />
              </div>
              <Button className="bg-gradient-accent hover:opacity-90 shadow-button px-8 py-3" onClick={handleSearch}>
                البحث
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 shadow-button px-8" asChild>
              <Link to="/career-test">
                <BookOpen className="w-5 h-5 ml-2" />
                ابدأ اختبار التوجيه المهني
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/specializations">
                <GraduationCap className="w-5 h-5 ml-2" />
                استكشف التخصصات
              </Link>
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-card">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <div className="text-3xl font-bold text-yellow-400 mb-2">+50</div>
              <div className="text-white/90">تخصص جامعي</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-card">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <div className="text-3xl font-bold text-blue-300 mb-2">+25</div>
              <div className="text-white/90">جامعة أردنية</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-card">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <div className="text-3xl font-bold text-green-400 mb-2">+10K</div>
              <div className="text-white/90">طالب مسجل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;