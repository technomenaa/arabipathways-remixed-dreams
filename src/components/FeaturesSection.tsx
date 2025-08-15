import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "اختبار التوجيه المهني",
      description: "15 سؤال لتحديد التخصص المناسب",
      color: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "دليل الجامعات",
      description: "معلومات شاملة عن الجامعات الأردنية",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "التواصل المباشر",
      description: "تواصل مع الجامعات مباشرة",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            لماذا تختار مسارات الجامعات؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن نساعدك في اتخاذ أهم قرار في حياتك الأكاديمية بطريقة علمية ومدروسة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8 text-center">
                <feature.icon className={`w-16 h-16 mx-auto mb-6 ${feature.color}`} />
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-accent hover:opacity-90 shadow-button px-12" asChild>
            <Link to="/guidance">
              طلب استشارة أكاديمية
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;