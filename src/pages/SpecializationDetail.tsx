import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { specializationsData } from "@/data/specializations";
import { ArrowRight, MapPin, DollarSign, Clock, TrendingUp, CheckCircle, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const SpecializationDetail = () => {
  const { id } = useParams();
  const subSpec = specializationsData
    .flatMap(spec => spec.subSpecializations)
    .find(sub => sub.id === id);

  if (!subSpec) {
    return (
      <div className="min-h-screen" dir="rtl">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">التخصص غير موجود</h1>
          <Link to="/specializations">
            <Button className="bg-gradient-accent hover:opacity-90">
              العودة للتخصصات
            </Button>
          </Link>
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{subSpec.name}</h1>
            <p className="text-xl mb-8 leading-relaxed">{subSpec.description}</p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
                <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="font-bold">{subSpec.duration}</div>
                <div className="text-sm text-white/80">مدة الدراسة</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="font-bold">{subSpec.averageSalary}</div>
                <div className="text-sm text-white/80">متوسط الراتب</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="font-bold">{subSpec.averageGrade}</div>
                <div className="text-sm text-white/80">معدل القبول</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="font-bold">{subSpec.universities.length}</div>
                <div className="text-sm text-white/80">جامعة متاحة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Career Outlook */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-primary flex items-center">
                    <TrendingUp className="w-8 h-8 ml-3 text-green-500" />
                    آفاق المهنة
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6">{subSpec.careerOutlook}</p>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">المسميات الوظيفية:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {subSpec.jobTitles.map((job, index) => (
                      <div key={index} className="flex items-center p-3 bg-secondary/10 rounded-lg">
                        <Briefcase className="w-5 h-5 ml-3 text-primary" />
                        <span>{job}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills Required */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-primary flex items-center">
                    <CheckCircle className="w-8 h-8 ml-3 text-blue-500" />
                    المهارات المطلوبة
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subSpec.skills.map((skill, index) => (
                      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 ml-3 text-blue-500" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Courses */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-primary flex items-center">
                    <BookOpen className="w-8 h-8 ml-3 text-orange-500" />
                    المواد الدراسية الرئيسية
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subSpec.coursesInclude.map((course, index) => (
                      <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                        <BookOpen className="w-5 h-5 ml-3 text-orange-500" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Admission Requirements */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <h3 className="text-xl font-bold text-primary">شروط القبول</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {subSpec.admissionRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 ml-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Universities */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <h3 className="text-xl font-bold text-primary">الجامعات المتاحة</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {subSpec.universities.map((uni, index) => (
                      <div key={index} className="flex items-center p-3 bg-primary/5 rounded-lg">
                        <MapPin className="w-5 h-5 ml-3 text-primary" />
                        <span className="font-medium">{uni}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gradient-accent hover:opacity-90">
                    مقارنة الجامعات
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <h3 className="text-xl font-bold text-primary">إجراءات سريعة</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-gradient-accent hover:opacity-90">
                    طلب استشارة مجانية
                  </Button>
                  <Button variant="outline" className="w-full">
                    تحميل دليل التخصص
                  </Button>
                  <Link to="/career-test">
                    <Button variant="outline" className="w-full">
                      إجراء اختبار التوجيه
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Specializations */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">تخصصات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specializationsData
                .flatMap(spec => spec.subSpecializations)
                .filter(sub => sub.id !== id)
                .slice(0, 3)
                .map((relatedSpec, index) => (
                  <Card key={index} className="shadow-card border-0 hover:shadow-lg transition-smooth group">
                    <CardHeader>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-smooth">
                        {relatedSpec.name}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {relatedSpec.description}
                      </p>
                      <Link to={`/specialization/${relatedSpec.id}`}>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-smooth">
                          اكتشف التخصص
                          <ArrowRight className="w-4 h-4 mr-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecializationDetail;