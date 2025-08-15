import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import { BookOpen, Calendar, MessageCircle, Target, TrendingUp, Clock, CheckCircle, User, Settings, FileText } from "lucide-react";

const StudentDashboard = () => {
  const { user, isStudent } = useAuth();

  if (!isStudent) {
    return <Navigate to="/login" replace />;
  }

  const studentProgress = {
    careerTestCompleted: true,
    profileCompleted: 85,
    applicationsSubmitted: 3,
    universitiesExplored: 12
  };

  const recentActivities = [
    { id: 1, action: "اكتملت", item: "اختبار التوجيه المهني", time: "منذ يومين", icon: CheckCircle, color: "text-green-500" },
    { id: 2, action: "تم استكشاف", item: "تخصص الهندسة الكيميائية", time: "منذ 3 أيام", icon: BookOpen, color: "text-blue-500" },
    { id: 3, action: "تم التواصل مع", item: "الجامعة الأردنية", time: "منذ أسبوع", icon: MessageCircle, color: "text-purple-500" }
  ];

  const recommendedSpecializations = [
    { name: "الهندسة الكيميائية", match: "95%", reason: "يناسب شخصيتك التحليلية" },
    { name: "علوم الحاسوب", match: "88%", reason: "يتماشى مع مهاراتك التقنية" },
    { name: "الرياضيات التطبيقية", match: "82%", reason: "يناسب قدراتك الحسابية" }
  ];

  const upcomingDeadlines = [
    { university: "الجامعة الأردنية", deadline: "15 مارس 2024", daysLeft: 12, status: "مفتوح" },
    { university: "جامعة العلوم والتكنولوجيا", deadline: "22 مارس 2024", daysLeft: 19, status: "مفتوح" },
    { university: "الجامعة الهاشمية", deadline: "30 مارس 2024", daysLeft: 27, status: "قريباً" }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحباً {user?.name} 👋</h1>
              <p className="text-white/90">لنواصل بناء مستقبلك الأكاديمي معاً</p>
            </div>
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-md">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">اختبار مكتمل</div>
                <div className="text-sm text-white/80">التوجيه المهني</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Progress Overview */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">تقدمك الأكاديمي</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">اكتمال الملف الشخصي</span>
                      <span className="text-sm text-muted-foreground">{studentProgress.profileCompleted}%</span>
                    </div>
                    <Progress value={studentProgress.profileCompleted} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">الجامعات المستكشفة</span>
                      <span className="text-sm text-muted-foreground">{studentProgress.universitiesExplored}/25</span>
                    </div>
                    <Progress value={(studentProgress.universitiesExplored / 25) * 100} className="h-2" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <div className="font-bold text-green-700">مكتمل</div>
                    <div className="text-sm text-green-600">اختبار التوجيه</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="font-bold text-blue-700">{studentProgress.applicationsSubmitted}</div>
                    <div className="text-sm text-blue-600">طلبات مرسلة</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <div className="font-bold text-purple-700">12</div>
                    <div className="text-sm text-purple-600">تخصص مستكشف</div>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                    <div className="font-bold text-orange-700">5</div>
                    <div className="text-sm text-orange-600">استشارات مجدولة</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Specializations */}
            <Card className="shadow-card border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-bold text-primary">التخصصات المقترحة لك</h2>
                <Badge variant="secondary">بناءً على اختبار التوجيه</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedSpecializations.map((spec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-card rounded-lg border">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary">{spec.name}</h3>
                        <p className="text-sm text-muted-foreground">{spec.reason}</p>
                      </div>
                      <div className="text-left rtl:text-right mr-4">
                        <div className="text-2xl font-bold text-green-600">{spec.match}</div>
                        <div className="text-xs text-muted-foreground">نسبة التطابق</div>
                      </div>
                      <Link to={`/specialization/${spec.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button size="sm" className="bg-gradient-accent hover:opacity-90">
                          استكشف
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">النشاطات الأخيرة</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 rtl:space-x-reverse p-3 bg-secondary/10 rounded-lg">
                      <activity.icon className={`w-6 h-6 ${activity.color}`} />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-primary">إجراءات سريعة</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/career-test">
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="w-4 h-4 ml-2" />
                    إعادة اختبار التوجيه
                  </Button>
                </Link>
                <Link to="/specializations">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 ml-2" />
                    استكشاف التخصصات
                  </Button>
                </Link>
                <Link to="/universities">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 ml-2" />
                    مقارنة الجامعات
                  </Button>
                </Link>
                <Link to="/guidance">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 justify-start">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    حجز استشارة
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-primary flex items-center">
                  <Calendar className="w-5 h-5 ml-2" />
                  مواعيد التسجيل
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg">
                      <h4 className="font-medium text-primary text-sm">{deadline.university}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">{deadline.deadline}</span>
                        <Badge variant={deadline.daysLeft <= 15 ? 'destructive' : 'secondary'} className="text-xs">
                          {deadline.daysLeft} يوم متبقي
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  عرض جميع المواعيد
                </Button>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-primary flex items-center">
                  <User className="w-5 h-5 ml-2" />
                  إكمال الملف الشخصي
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">المعلومات الأساسية</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">المؤهلات الأكاديمية</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الاهتمامات والهوايات</span>
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الأهداف المهنية</span>
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  <Settings className="w-4 h-4 ml-2" />
                  إدارة الملف الشخصي
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDashboard;