import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Brain, Target, Users, BookOpen } from "lucide-react";
import { useState } from "react";
import { careerQuestions, personalityResults, type PersonalityResult } from "@/data/questions";

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: number}>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const question = careerQuestions[currentQuestion];
    const newAnswers = {
      ...answers,
      [question.category]: (answers[question.category] || 0) + 1
    };
    setAnswers(newAnswers);
    
    if (currentQuestion < careerQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getResult = (): PersonalityResult => {
    const maxCategory = Object.entries(answers).reduce((max, [category, score]) => 
      score > max.score ? { category, score } : max, 
      { category: 'analytical', score: 0 }
    );
    return personalityResults.find(result => result.type === maxCategory.category) || personalityResults[0];
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">التخصصات المناسبة:</h3>
                      <div className="flex flex-wrap gap-3">
                        {result.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">صفاتك الشخصية:</h3>
                      <div className="space-y-2">
                        {result.characteristics.map((char, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 ml-2 text-green-500" />
                            <span className="text-sm">{char}</span>
                          </div>
                        ))}
                      </div>
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
      
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">اختبار التوجيه المهني</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اكتشف التخصص الجامعي المناسب لشخصيتك ومهاراتك من خلال إجابتك على 15 سؤال مدروس علمياً
          </p>
          
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-primary">
                  السؤال {currentQuestion + 1} من {careerQuestions.length}
                </span>
                <span className="text-muted-foreground">
                  {Math.round(((currentQuestion + 1) / careerQuestions.length) * 100)}%
                </span>
              </div>
              <Progress value={((currentQuestion + 1) / careerQuestions.length) * 100} className="h-3" />
            </div>

            <Card className="shadow-card border-0">
              <CardHeader className="text-center pb-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {careerQuestions[currentQuestion].question}
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {careerQuestions[currentQuestion].options.map((option, index) => (
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