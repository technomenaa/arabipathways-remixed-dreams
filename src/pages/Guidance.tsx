import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, User, BookOpen, Target, GraduationCap, Phone, Video } from "lucide-react";

const Guidance = () => {
  const advisors = [
    {
      name: "د. أحمد محمد",
      title: "مستشار أكاديمي - تخصصات الهندسة",
      experience: "15 سنة",
      specialties: ["الهندسة", "علوم الحاسوب", "الرياضيات"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "د. فاطمة الزهراء",
      title: "مستشارة أكاديمية - العلوم الطبية",
      experience: "12 سنة",
      specialties: ["الطب", "الصيدلة", "التمريض"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1594824475483-c59e2b05a2ba?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "أ. محمد العلي",
      title: "مستشار أكاديمي - إدارة الأعمال",
      experience: "10 سنوات",
      specialties: ["إدارة الأعمال", "المحاسبة", "التسويق"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: "استشارة فورية",
      description: "احصل على إجابة سريعة لأسئلتك الأكاديمية",
      duration: "15-30 دقيقة",
      price: "مجاني",
      color: "text-blue-500"
    },
    {
      icon: Video,
      title: "جلسة إرشاد مرئية",
      description: "جلسة مرئية مع مستشار أكاديمي متخصص",
      duration: "45-60 دقيقة",
      price: "25 دينار",
      color: "text-green-500"
    },
    {
      icon: Calendar,
      title: "خطة أكاديمية شاملة",
      description: "وضع خطة دراسية شاملة لمسيرتك الجامعية",
      duration: "2-3 ساعات",
      price: "50 دينار",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">الإرشاد الأكاديمي</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            احصل على استشارة أكاديمية متخصصة من خبراء التعليم العالي لتخطط لمستقبلك الجامعي بثقة
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl">
              <User className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl font-bold mb-2">+50</div>
              <div className="text-white/90">مستشار أكاديمي</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-2xl font-bold mb-2">+1000</div>
              <div className="text-white/90">طالب تم توجيهه</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl">
              <Target className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold mb-2">98%</div>
              <div className="text-white/90">نسبة الرضا</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">خدمات الإرشاد الأكاديمي</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              اختر الخدمة التي تناسب احتياجاتك الأكاديمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-lg transition-smooth">
                <CardHeader className="text-center pb-4">
                  <service.icon className={`w-16 h-16 mx-auto mb-4 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">المدة: {service.duration}</div>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                  <Button className="w-full bg-gradient-accent hover:opacity-90">
                    احجز الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">المستشارون الأكاديميون</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              فريق من الخبراء المتخصصين في مختلف المجالات الأكاديمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="shadow-card border-0 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <GraduationCap className="w-20 h-20 text-white" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold text-primary">{advisor.name}</h3>
                  <p className="text-muted-foreground">{advisor.title}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span>خبرة: {advisor.experience}</span>
                    <span className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      {advisor.rating}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {advisor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-accent hover:opacity-90">
                      <Video className="w-4 h-4 ml-1" />
                      فيديو
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 ml-1" />
                      اتصال
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">اطلب استشارة مجانية</h2>
              <p className="text-xl text-muted-foreground">
                املأ النموذج وسيتواصل معك أحد مستشارينا خلال 24 ساعة
              </p>
            </div>

            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">الاسم الكامل</label>
                      <Input placeholder="أدخل اسمك الكامل" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">البريد الإلكتروني</label>
                      <Input type="email" placeholder="example@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">رقم الهاتف</label>
                      <Input placeholder="07xxxxxxxx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">المرحلة الدراسية</label>
                      <Input placeholder="الثانوية العامة / الجامعة" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">مجال الاستشارة</label>
                    <Input placeholder="مثال: اختيار التخصص الجامعي" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">تفاصيل السؤال</label>
                    <Textarea 
                      placeholder="اشرح سؤالك أو المجال الذي تحتاج فيه استشارة..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-accent hover:opacity-90 shadow-button text-lg py-3">
                    إرسال طلب الاستشارة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guidance;