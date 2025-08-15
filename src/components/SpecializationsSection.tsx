import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { specializationsData } from "@/data/specializations";
import engineeringImage from "@/assets/engineering-lab.jpg";
import medicalImage from "@/assets/medical-studies.jpg";
import businessImage from "@/assets/business-studies.jpg";

const SpecializationsSection = () => {
  const getSpecializationImage = (imagePath: string) => {
    if (imagePath.includes('engineering')) return engineeringImage;
    if (imagePath.includes('medical')) return medicalImage;
    if (imagePath.includes('business')) return businessImage;
    return engineeringImage;
  };

  const getGradientClass = (category: string) => {
    switch (category) {
      case 'علوم تطبيقية':
        return 'from-blue-500 to-cyan-500';
      case 'علوم صحية':
        return 'from-red-500 to-pink-500';
      case 'علوم إدارية':
        return 'from-green-500 to-emerald-500';
      case 'علوم إنسانية':
        return 'from-purple-500 to-violet-500';
      case 'علوم تربوية':
        return 'from-orange-500 to-yellow-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

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
          {specializationsData.map((spec, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-smooth">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getSpecializationImage(spec.image)} 
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getGradientClass(spec.category)} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {spec.universities} جامعة
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
                    {spec.subSpecializations.slice(0, 3).map((subSpec, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subSpec.name}
                      </Badge>
                    ))}
                    {spec.subSpecializations.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{spec.subSpecializations.length - 3} المزيد
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group" asChild>
                  <Link to={`/specializations-list/${spec.title}`}>
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