import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, BookOpen, Users, Building2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { specializationsData } from "@/data/specializations";

const SpecializationList = () => {
  const { category } = useParams();
  
  // Get all sub-specializations for the selected category
  const getSubSpecializations = () => {
    const mainSpec = specializationsData.find(spec => 
      spec.title.toLowerCase() === category?.toLowerCase()
    );
    
    if (!mainSpec) return [];
    
    return mainSpec.subSpecializations.map(sub => ({
      ...sub,
      mainCategory: mainSpec.title,
      mainImage: mainSpec.image
    }));
  };

  const subSpecializations = getSubSpecializations();

  if (subSpecializations.length === 0) {
    return (
      <div className="min-h-screen" dir="rtl">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">التخصص غير موجود</h1>
          <Button asChild>
            <Link to="/specializations">العودة للتخصصات</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">التخصصات الفرعية في {category}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اكتشف جميع التخصصات الفرعية المتاحة في مجال {category} واختر ما يناسب اهتماماتك وأهدافك المستقبلية
          </p>
        </div>
      </section>

      {/* Sub-Specializations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subSpecializations.map((subSpec, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={subSpec.mainImage || "/api/placeholder/400/300"} 
                    alt={subSpec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {subSpec.universities?.length || 0} جامعة
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary">{subSpec.name}</h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {subSpec.description}
                  </p>
                  
                  {/* Career Opportunities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 ml-2" />
                      فرص العمل:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {subSpec.jobTitles?.slice(0, 3).map((career, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {career}
                        </Badge>
                      )) || <span className="text-muted-foreground text-sm">لا توجد معلومات متاحة</span>}
                    </div>
                  </div>

                  {/* Universities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Building2 className="w-4 h-4 ml-2" />
                      الجامعات المتاحة:
                    </h4>
                    <div className="space-y-2">
                      {subSpec.universities?.slice(0, 3).map((uni, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span>{uni}</span>
                        </div>
                      )) || <span className="text-muted-foreground text-sm">لا توجد معلومات متاحة</span>}
                      {(subSpec.universities?.length || 0) > 3 && (
                        <span className="text-xs text-muted-foreground">
                          و {(subSpec.universities?.length || 0) - 3} جامعات أخرى
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-accent hover:opacity-90" asChild>
                    <Link to={`/specialization/${subSpec.id}`}>
                      تفاصيل التخصص
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/specializations">
                العودة لجميع التخصصات
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecializationList;