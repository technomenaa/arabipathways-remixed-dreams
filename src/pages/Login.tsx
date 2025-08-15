import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let success = false;
      
      if (isLogin) {
        success = await login(email, password);
      } else {
        success = await register(name, email, password);
      }

      if (success) {
        // Navigate based on user role - for demo, admin goes to admin dashboard
        if (email === 'admin@uni-pathways.jo') {
          navigate('/admin');
        } else {
          navigate('/student-dashboard');
        }
      } else {
        setError(isLogin ? 'بيانات الدخول غير صحيحة' : 'فشل في إنشاء الحساب');
      }
    } catch (err) {
      setError('حدث خطأ ما، حاول مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  // Demo accounts for testing
  const demoAccounts = [
    { email: 'admin@uni-pathways.jo', password: 'admin123', role: 'admin', name: 'أحمد محمد' },
    { email: 'fatima@student.com', password: 'student123', role: 'student', name: 'فاطمة الزهراء' }
  ];

  const loginDemo = (account: typeof demoAccounts[0]) => {
    setEmail(account.email);
    setPassword(account.password);
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-card border-0">
              <CardHeader className="text-center pb-6">
                <h1 className="text-3xl font-bold text-primary mb-2">
                  {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
                </h1>
                <p className="text-muted-foreground">
                  {isLogin 
                    ? 'مرحباً بعودتك! سجل دخولك للمتابعة' 
                    : 'انضم إلينا وابدأ رحلتك الأكاديمية'
                  }
                </p>
              </CardHeader>
              
              <CardContent>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        الاسم الكامل
                      </label>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        required={!isLogin}
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      كلمة المرور
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="أدخل كلمة المرور"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-accent hover:opacity-90 shadow-button"
                    disabled={loading}
                  >
                    {loading ? 'جاري التحميل...' : (
                      <>
                        {isLogin ? <LogIn className="w-5 h-5 ml-2" /> : <UserPlus className="w-5 h-5 ml-2" />}
                        {isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب'}
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError("");
                    }}
                    className="w-full"
                  >
                    {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
                  </Button>
                </div>

                {/* Demo Accounts */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-primary mb-3 text-center">
                    حسابات تجريبية للاختبار
                  </h3>
                  <div className="space-y-2">
                    {demoAccounts.map((account, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => loginDemo(account)}
                      >
                        {account.role === 'admin' ? '👨‍💼' : '👩‍🎓'} {account.name} ({account.role === 'admin' ? 'مدير' : 'طالب'})
                      </Button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    انقر لملء البيانات تلقائياً
                  </p>
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

export default Login;