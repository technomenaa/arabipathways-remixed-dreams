import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, GraduationCap } from "lucide-react";
import engineeringImage from "@/assets/engineering-lab.jpg";
import medicalImage from "@/assets/medical-studies.jpg";
import businessImage from "@/assets/business-studies.jpg";

const Specializations = () => {
  const specializations = [
    {
      title: "الهندسة",
      description: "تخصص يركز على تطبيق المبادئ العلمية والرياضية لحل المشاكل العملية وتصميم وبناء الهياكل والأنظمة",
      image: engineeringImage,
      universities: 15,
      students: "5,200+",
      subFields: ["الهندسة الكيميائية", "الهندسة المعمارية", "الهندسة المدنية", "هندسة الكمبيوتر"],
      category: "علوم تطبيقية"
    },
    {
      title: "الطب",
      description: "تخصص يهتم بدراسة الأمراض وتشخيصها وعلاجها والوقاية منها، بالإضافة إلى فهم وظائف الجسم البشري",
      image: medicalImage,
      universities: 12,
      students: "3,800+",
      subFields: ["الطب العام", "طب الأسنان", "الصيدلة", "التمريض"],
      category: "علوم صحية"
    },
    {
      title: "إدارة الأعمال",
      description: "تخصص يدرس مبادئ الإدارة والقيادة وإدارة الموارد البشرية والتسويق والمالية في المنظمات التجارية",
      image: businessImage,
      universities: 20,
      students: "7,500+",
      subFields: ["التسويق", "المالية", "إدارة الموارد البشرية", "ريادة الأعمال"],
      category: "علوم إدارية"
    },
    {
      title: "علوم الحاسوب",
      description: "تخصص يركز على دراسة الخوارزميات وتطوير البرمجيات وأنظمة قواعد البيانات والذكاء الاصطناعي",
      image: engineeringImage,
      universities: 18,
      students: "4,600+",
      subFields: ["البرمجة", "الذكاء الاصطناعي", "أمن المعلومات", "تطوير الألعاب"],
      category: "علوم تطبيقية"
    },
    {
      title: "الحقوق",
      description: "تخصص يدرس القوانين والأنظمة القانونية وتطبيقها في المجتمع والمؤسسات المختلفة",
      image: businessImage,
      universities: 14,
      students: "2,900+",
      subFields: ["القانون المدني", "القانون الجنائي", "القانون التجاري", "القانون الدولي"],
      category: "علوم إنسانية"
    },
    {
      title: "التربية",
      description: "تخصص يهتم بإعداد المعلمين والمربين وتطوير طرق التدريس والمناهج التعليمية",
      image: medicalImage,
      universities: 16,
      students: "3,200+",
      subFields: ["تعليم أساسي", "تربية خاصة", "علم النفس التربوي", "المناهج والتدريس"],
      category: "علوم تربوية"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">التخصصات الجامعية</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اكتشف التخصص الذي يناسب شغفك وطموحاتك المستقبلية من بين أكثر من 50 تخصص متاح في الجامعات الأردنية
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input 
                  placeholder="ابحث عن التخصص..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 pr-12"
                />
              </div>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Filter className="w-4 h-4 ml-2" />
                تصفية النتائج
              </Button>
              <Button className="bg-gradient-accent hover:opacity-90 shadow-button">
                بحث
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={spec.image} 
                    alt={spec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {spec.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
                      <span><GraduationCap className="w-4 h-4 inline ml-1" />{spec.universities} جامعة</span>
                      <span>{spec.students} طالب</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary">{spec.title}</h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {spec.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">التخصصات الفرعية:</h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.subFields.map((field, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-accent hover:opacity-90">
                    تفاصيل التخصص
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specializations;