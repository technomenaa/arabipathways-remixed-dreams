import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Brain, Target, Users, BookOpen } from "lucide-react";
import { useState } from "react";

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "ما هو نوع النشاط الذي تفضل القيام به في وقت فراغك؟",
      options: [
        "حل المسائل الرياضية والألغاز",
        "قراءة الكتب والمقالات",
        "ممارسة الرياضة والأنشطة البدنية",
        "الرسم والأعمال الفنية"
      ]
    },
    {
      id: 2,
      question: "أي من البيئات التالية تفضل العمل فيها؟",
      options: [
        "مختبر علمي أو تقني",
        "مكتب هادئ ومنظم",
        "في الهواء الطلق أو مواقع مختلفة",
        "استوديو إبداعي أو ورشة عمل"
      ]
    },
    {
      id: 3,
      question: "ما هي نقطة قوتك الأساسية؟",
      options: [
        "التفكير التحليلي والمنطقي",
        "التواصل والكتابة",
        "القيادة والعمل الجماعي",
        "الإبداع والخيال"
      ]
    },
    {
      id: 4,
      question: "أي من هذه المواد الدراسية كنت تحبها أكثر؟",
      options: [
        "الرياضيات والفيزياء",
        "اللغة العربية والتاريخ",
        "التربية الرياضية والأحياء",
        "الفن والموسيقى"
      ]
    },
    {
      id: 5,
      question: "كيف تفضل حل المشاكل؟",
      options: [
        "بتحليل البيانات والحقائق",
        "بالبحث والاستشارة",
        "بالعمل الجماعي والتشاور",
        "بالتفكير الإبداعي والابتكار"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    // Simple logic to determine result based on answers
    const analyticalCount = answers.filter(a => a.includes("الرياضيات") || a.includes("تحليل") || a.includes("مختبر")).length;
    const communicativeCount = answers.filter(a => a.includes("قراءة") || a.includes("التواصل") || a.includes("اللغة")).length;
    const leadershipCount = answers.filter(a => a.includes("القيادة") || a.includes("الجماعي") || a.includes("الرياضة")).length;
    const creativeCount = answers.filter(a => a.includes("الفن") || a.includes("الإبداع") || a.includes("استوديو")).length;

    if (analyticalCount >= 2) {
      return {
        title: "الشخصية التحليلية",
        description: "أنت شخص يحب التفكير المنطقي وحل المشاكل المعقدة",
        specializations: ["الهندسة", "علوم الحاسوب", "الرياضيات", "الفيزياء"],
        color: "bg-blue-500"
      };
    } else if (communicativeCount >= 2) {
      return {
        title: "الشخصية التواصلية",
        description: "أنت شخص يحب التواصل مع الآخرين والعمل في المجالات الإنسانية",
        specializations: ["الحقوق", "الصحافة", "التربية", "علم النفس"],
        color: "bg-green-500"
      };
    } else if (leadershipCount >= 2) {
      return {
        title: "الشخصية القيادية",
        description: "أنت شخص يحب قيادة الفرق والعمل في بيئات ديناميكية",
        specializations: ["إدارة الأعمال", "العلوم السياسية", "إدارة عامة"],
        color: "bg-purple-500"
      };
    } else {
      return {
        title: "الشخصية الإبداعية",
        description: "أنت شخص يحب الإبداع والابتكار والعمل الفني",
        specializations: ["الفنون الجميلة", "التصميم", "الهندسة المعمارية", "الإعلام"],
        color: "bg-orange-500"
      };
    }
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="min-h-screen" dir="rtl">
        <Header />
        
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-500" />
              <h1 className="text-4xl font-bold text-primary mb-4">تم الانتهاء من الاختبار!</h1>
              
              <Card className="shadow-card border-0 mb-8">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${result.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{result.title}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-muted-foreground mb-6">{result.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary mb-4">التخصصات المناسبة لك:</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {result.specializations.map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-accent hover:opacity-90 shadow-button">
                      استكشف التخصصات المقترحة
                    </Button>
                    <Button variant="outline" onClick={restartTest}>
                      إعادة الاختبار
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
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
          <h1 className="text-5xl font-bold mb-6">اختبار التوجيه المهني</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اكتشف التخصص الجامعي المناسب لشخصيتك ومهاراتك من خلال إجابتك على 15 سؤال مدروس علمياً
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <div className="font-bold">5 دقائق</div>
              <div className="text-sm text-white/80">مدة الاختبار</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="font-bold">95%</div>
              <div className="text-sm text-white/80">دقة النتائج</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="font-bold">+10K</div>
              <div className="text-sm text-white/80">طالب أجرى الاختبار</div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-primary">
                  السؤال {currentQuestion + 1} من {questions.length}
                </span>
                <span className="text-muted-foreground">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-3" />
            </div>

            {/* Question */}
            <Card className="shadow-card border-0">
              <CardHeader className="text-center pb-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {questions[currentQuestion].question}
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="p-6 text-right h-auto text-wrap hover:bg-primary hover:text-white transition-smooth"
                      onClick={() => handleAnswer(option)}
                    >
                      <span className="text-lg">{option}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareerTest;