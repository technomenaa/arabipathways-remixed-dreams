import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import engineeringImage from "@/assets/engineering-lab.jpg";
import medicalImage from "@/assets/medical-studies.jpg";
import businessImage from "@/assets/business-studies.jpg";

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "الهندسة",
      description: "تخصص يركز على تطبيق المبادئ العلمية والرياضية لحل المشاكل العملية وتصميم وبناء الهياكل والأنظمة",
      image: engineeringImage,
      universities: "15 جامعة",
      subFields: ["الهندسة الكيميائية", "الهندسة المعمارية", "الهندسة المدنية"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "الطب",
      description: "تخصص يهتم بدراسة الأمراض وتشخيصها وعلاجها والوقاية منها، بالإضافة إلى فهم وظائف الجسم البشري",
      image: medicalImage,
      universities: "12 جامعة",
      subFields: ["الطب العام", "طب الأسنان", "الصيدلة"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "إدارة الأعمال",
      description: "تخصص يدرس مبادئ الإدارة والقيادة وإدارة الموارد البشرية والتسويق والمالية في المنظمات التجارية",
      image: businessImage,
      universities: "20 جامعة",
      subFields: ["التسويق", "المالية", "إدارة الموارد البشرية"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            استكشف التخصصات الجامعية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اختر من بين مجموعة متنوعة من التخصصات الأكاديمية المتوفرة في أفضل الجامعات الأردنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-smooth">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={spec.image} 
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${spec.gradient} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {spec.universities}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold text-primary">{spec.title}</h3>
              </CardHeader>
              
              <CardContent className="pt-0">
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
                
                <Button variant="outline" className="w-full group" asChild>
                  <Link to="/specializations">
                    التخصصات الفرعية
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-12" asChild>
            <Link to="/specializations">
              عرض جميع التخصصات
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;