import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Mail, Globe, Users, Star } from "lucide-react";

const Universities = () => {
  const universities = [
    {
      name: "الجامعة الأردنية",
      city: "عمان",
      type: "حكومية",
      established: "1962",
      students: "40,000+",
      faculties: 19,
      rating: 4.8,
      specialties: ["الطب", "الهندسة", "الحقوق", "إدارة الأعمال"],
      description: "أول وأعرق الجامعات الأردنية، تقدم تعليماً عالي الجودة في مختلف التخصصات"
    },
    {
      name: "جامعة العلوم والتكنولوجيا الأردنية",
      city: "إربد",
      type: "حكومية",
      established: "1986",
      students: "22,000+",
      faculties: 12,
      rating: 4.7,
      specialties: ["الهندسة", "الطب", "علوم الحاسوب", "الصيدلة"],
      description: "جامعة متخصصة في العلوم التطبيقية والتكنولوجيا مع أحدث المختبرات"
    },
    {
      name: "جامعة اليرموك",
      city: "إربد",
      type: "حكومية",
      established: "1976",
      students: "38,000+",
      faculties: 15,
      rating: 4.6,
      specialties: ["التربية", "الآداب", "الحقوق", "الاقتصاد"],
      description: "جامعة رائدة في العلوم الإنسانية والاجتماعية والتربوية"
    },
    {
      name: "الجامعة الألمانية الأردنية",
      city: "عمان",
      type: "خاصة",
      established: "2005",
      students: "4,500+",
      faculties: 6,
      rating: 4.9,
      specialties: ["الهندسة", "علوم الحاسوب", "إدارة الأعمال", "الطاقة"],
      description: "جامعة تطبق النظام التعليمي الألمani مع شراكات دولية قوية"
    },
    {
      name: "جامعة عمان الأهلية",
      city: "عمان",
      type: "خاصة",
      established: "1990",
      students: "12,000+",
      faculties: 10,
      rating: 4.4,
      specialties: ["الحقوق", "إدارة الأعمال", "تكنولوجيا المعلومات", "الصيدلة"],
      description: "أول جامعة خاصة في الأردن تقدم تعليماً متميزاً وبرامج حديثة"
    },
    {
      name: "جامعة الحسين التقنية",
      city: "عمان",
      type: "حكومية",
      established: "2016",
      students: "8,000+",
      faculties: 8,
      rating: 4.5,
      specialties: ["الهندسة التطبيقية", "تكنولوجيا المعلومات", "إدارة الأعمال التقنية"],
      description: "جامعة تقنية حديثة تركز على المهارات العملية والتطبيقية"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">الجامعات الأردنية</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اكتشف أفضل الجامعات في الأردن وابحث عن الجامعة التي تناسب طموحاتك الأكاديمية ومستقبلك المهني
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input 
                  placeholder="ابحث عن الجامعة..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 pr-12"
                />
              </div>
              <Button className="bg-gradient-accent hover:opacity-90 shadow-button">
                بحث
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={university.type === 'حكومية' ? 'default' : 'secondary'}>
                      {university.type}
                    </Badge>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{university.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{university.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4 ml-1" />
                    {university.city} • تأسست {university.established}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {university.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-secondary/20 rounded-lg">
                      <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <div className="font-semibold text-primary">{university.students}</div>
                      <div className="text-xs text-muted-foreground">طالب</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/20 rounded-lg">
                      <Globe className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <div className="font-semibold text-primary">{university.faculties}</div>
                      <div className="text-xs text-muted-foreground">كلية</div>
                    </div>
                  </div>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">التخصصات المميزة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Actions */}
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-accent hover:opacity-90">
                      تفاصيل الجامعة
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="w-4 h-4 ml-1" />
                        اتصال
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="w-4 h-4 ml-1" />
                        إيميل
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Globe className="w-4 h-4 ml-1" />
                        الموقع
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              عرض المزيد من الجامعات
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;