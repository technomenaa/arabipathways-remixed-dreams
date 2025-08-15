import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { specializationsData } from "@/data/specializations";

const Specializations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "جميع التخصصات" },
    { id: "علوم تطبيقية", name: "علوم تطبيقية" },
    { id: "علوم صحية", name: "علوم صحية" },
    { id: "علوم إدارية", name: "علوم إدارية" },
    { id: "علوم إنسانية", name: "علوم إنسانية" },
    { id: "علوم تربوية", name: "علوم تربوية" }
  ];

  const filteredSpecializations = specializationsData.filter(spec => {
    const matchesSearch = spec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spec.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spec.subSpecializations.some(sub => 
                           sub.name.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === "all" || spec.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = () => {
    // Search is already filtered in real-time
    console.log("Searching for:", searchTerm);
  };

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 pr-12"
                />
              </div>
              
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/20 border border-white/30 text-white rounded-lg px-4 py-2"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id} className="text-primary bg-white">
                    {cat.name}
                  </option>
                ))}
              </select>
              
              <Button className="bg-gradient-accent hover:opacity-90 shadow-button" onClick={handleSearch}>
                بحث
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {searchTerm && (
            <div className="mb-6 text-center">
              <p className="text-muted-foreground">
                عرض {filteredSpecializations.length} نتيجة للبحث عن "<span className="font-bold">{searchTerm}</span>"
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecializations.map((spec, index) => (
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
                    {spec.subSpecializations.slice(0, 3).map((subSpec, idx) => (
                      <Link key={idx} to={`/specialization/${subSpec.id}`}>
                        <Badge variant="outline" className="text-xs hover:bg-primary hover:text-white transition-smooth cursor-pointer">
                          {subSpec.name}
                        </Badge>
                      </Link>
                    ))}
                    {spec.subSpecializations.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{spec.subSpecializations.length - 3} المزيد
                      </Badge>
                    )}
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