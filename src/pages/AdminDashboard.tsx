import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Users, GraduationCap, BookOpen, TrendingUp, Settings, MessageSquare, FileText, BarChart3, Eye, Edit, Trash2, Plus } from "lucide-react";

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const stats = [
    { title: "إجمالي الطلاب", value: "12,845", change: "+8.2%", icon: Users, color: "text-blue-500" },
    { title: "عدد الجامعات", value: "25", change: "+2", icon: GraduationCap, color: "text-green-500" },
    { title: "التخصصات المتاحة", value: "47", change: "+5", icon: BookOpen, color: "text-purple-500" },
    { title: "اختبارات التوجيه", value: "8,234", change: "+12.5%", icon: TrendingUp, color: "text-orange-500" }
  ];

  const recentStudents = [
    { id: 1, name: "محمد أحمد", email: "mohamed@student.com", specialty: "الهندسة", status: "نشط", joinDate: "2024-01-15" },
    { id: 2, name: "سارة علي", email: "sara@student.com", specialty: "الطب", status: "نشط", joinDate: "2024-01-14" },
    { id: 3, name: "أحمد محمود", email: "ahmed@student.com", specialty: "إدارة الأعمال", status: "قيد المراجعة", joinDate: "2024-01-13" },
    { id: 4, name: "فاطمة خالد", email: "fatima@student.com", specialty: "علوم الحاسوب", status: "نشط", joinDate: "2024-01-12" }
  ];

  const recentQueries = [
    { id: 1, student: "علي حسن", subject: "استفسار عن تخصص الهندسة", status: "جديد", time: "منذ 30 دقيقة" },
    { id: 2, student: "نور الدين", subject: "معلومات عن الجامعة الأردنية", status: "قيد المعالجة", time: "منذ ساعة" },
    { id: 3, student: "ريم محمد", subject: "تغيير التخصص", status: "مكتمل", time: "منذ ساعتين" }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary">لوحة التحكم - الإدارة</h1>
              <p className="text-muted-foreground mt-1">مرحباً {user?.name}، إليك نظرة عامة على النظام</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 ml-2" />
                الإعدادات
              </Button>
              <Button className="bg-gradient-accent hover:opacity-90" size="sm">
                <Plus className="w-4 h-4 ml-2" />
                إضافة جديد
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Students */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-xl font-bold text-primary">الطلاب الجدد</h2>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 ml-2" />
                  عرض الكل
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                          <p className="text-xs text-muted-foreground">انضم في {student.joinDate}</p>
                        </div>
                      </div>
                      <div className="text-left rtl:text-right">
                        <Badge variant={student.status === 'نشط' ? 'default' : 'secondary'}>
                          {student.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{student.specialty}</p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Queries */}
          <div>
            <Card className="shadow-card border-0 mb-6">
              <CardHeader>
                <h2 className="text-xl font-bold text-primary flex items-center">
                  <MessageSquare className="w-5 h-5 ml-2" />
                  الاستفسارات الأخيرة
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentQueries.map((query) => (
                    <div key={query.id} className="p-3 border border-border rounded-lg">
                      <h4 className="font-medium text-primary text-sm">{query.student}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{query.subject}</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge 
                          variant={
                            query.status === 'جديد' ? 'destructive' : 
                            query.status === 'قيد المعالجة' ? 'secondary' : 'default'
                          }
                          className="text-xs"
                        >
                          {query.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{query.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  عرض جميع الاستفسارات
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-primary">إجراءات سريعة</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 ml-2" />
                  إنشاء تقرير جديد
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 ml-2" />
                  عرض الإحصائيات التفصيلية
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 ml-2" />
                  إدارة المستخدمين
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 ml-2" />
                  إدارة التخصصات
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

export default AdminDashboard;