import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  AlertCircle, 
  BrainCircuit, 
  ShieldCheck, 
  ChevronRight,
  ArrowUpRight,
  Info,
  CreditCard, 
  LineChart, 
  LayoutDashboard, 
  Target, 
  Zap, 
  Clock, 
  Trophy, 
  Flame, 
  CheckCircle2, 
  Bell, 
  Calculator, 
  UserCheck,
  Search,
  Settings,
  LogOut,
  HelpCircle,
  Menu,
  X,
  ArrowRight,
  TrendingDown,
  ChevronDown,
  Activity,
  Lock,
  Home,
  Sparkles,
  Heart
} from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const APP_NAME = "VÍ AN";

  // Dữ liệu mô phỏng dựa trên hành vi (Mental Accounts)
  const financialData = {
    userName: "Nguyễn Minh Triết",
    totalBalance: "85,450,000",
    accounts: [
      { id: 'sa', name: 'Tích Lũy An Tâm', balance: '50,500,000', color: '#00A896', label: 'AN', desc: 'Tiền mặt & Tiết kiệm' },
      { id: 'oa', name: 'Phát Triển Oracle', balance: '22,450,000', color: '#F4A261', label: 'PH', desc: 'Chứng khoán & Vàng' },
      { id: 'ma', name: 'Dự Phòng Khẩn Cấp', balance: '10,000,000', color: '#2A9D8F', label: 'DP', desc: 'Quỹ 6 tháng chi tiêu' },
      { id: 'ra', name: 'Ước Mơ (Nhà/Xe)', balance: '2,500,000', color: '#E76F51', label: 'UM', desc: 'Tích lũy dài hạn' }
    ],
    healthScore: 78,
  };

  // --- LOGIN PAGE ---
  const LoginWeb = () => (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#004D43] p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-4 gap-8 p-10">
              {[...Array(12)].map((_, i) => <ShieldCheck key={i} size={100} className="text-white" />)}
            </div>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 mb-8 backdrop-blur-md">
              <ShieldCheck size={28} className="text-white" />
            </div>
            <h1 className="text-white text-6xl font-black leading-tight tracking-tighter mb-6 uppercase italic">
              {APP_NAME}
            </h1>
            <p className="text-white/70 text-lg max-w-sm leading-relaxed">
              Ví thông minh chuẩn Singapore. Thấu hiểu hành vi, bảo vệ tương lai.
            </p>
          </div>
          <div className="relative z-10 flex gap-4 text-white/50">
             <Calculator size={24}/>
             <Lock size={24}/>
             <Activity size={24}/>
          </div>
        </div>

        <div className="p-12 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-gray-900 mb-2 italic uppercase tracking-tighter">Chào bạn mới</h2>
            <p className="text-gray-500 font-medium">Đăng nhập qua định danh điện tử để bắt đầu.</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-[#004D43] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-4 transition-all hover:bg-[#003a32] active:scale-[0.98] shadow-xl shadow-green-900/10 uppercase tracking-widest text-sm"
          >
            <UserCheck size={20} />
            Đăng nhập qua VNeID
          </button>
          <div className="mt-12 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Sản phẩm ứng dụng Data Science & Behavioral Economics
          </div>
        </div>
      </div>
    </div>
  );

  // --- DASHBOARD WEB VIEW ---
  const DashboardWeb = () => {
    return (
      <div className="flex min-h-screen bg-[#F5F5F7] font-sans">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col sticky top-0 h-screen z-50`}>
          <div className="p-6 flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-[#004D43] rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-900/10">
              <ShieldCheck size={24} />
            </div>
            {sidebarOpen && <span className="text-2xl font-black tracking-tighter text-[#004D43] uppercase italic">{APP_NAME}</span>}
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Tổng quan' },
              { id: 'debts', icon: ShieldCheck, label: 'Vững chãi' },
              { id: 'invest', icon: LineChart, label: 'Phát triển' },
              { id: 'goals', icon: Target, label: 'Ước mơ' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all ${activeTab === item.id ? 'bg-[#004D43] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <Icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} className="shrink-0" />
                  {sidebarOpen && <span className="font-bold text-sm tracking-tight">{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-100">
             <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-4 p-3.5 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm uppercase tracking-tighter">
                <LogOut size={22} />
                {sidebarOpen && <span>Thoát</span>}
             </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-4 text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">
               {activeTab === 'overview' ? 'Bảng điều khiển trung tâm' : activeTab}
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-gray-900">{financialData.userName}</p>
                <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest italic">Member Platinum</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-black text-[#004D43] text-xs">MT</div>
            </div>
          </header>

          <div className="p-8 max-w-4xl mx-auto w-full space-y-12 animate-in fade-in duration-500">
            {activeTab === 'overview' && (
              <>
                {/* HERO: VISUAL DONUT CHART (BEHAVIORAL ANCHOR) */}
                <section className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col items-center">
                   <div className="relative w-72 h-72 mb-10">
                      {/* SVG Donut Chart Simulation */}
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E5E5" strokeWidth="12" />
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#00A896" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="100" /> {/* OA */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F4A261" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="180" /> {/* SA */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2A9D8F" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="220" /> {/* MA */}
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E76F51" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="240" /> {/* RA */}
                      </svg>
                      {/* Center Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Tổng tài sản</p>
                        <p className="text-3xl font-black tracking-tighter text-gray-900 italic">{financialData.totalBalance}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 italic">VND • Q1/2024</p>
                      </div>
                   </div>

                   {/* LEGEND / BREAKDOWN (BITE-SIZE CHUNKS) */}
                   <div className="w-full space-y-4">
                      {financialData.accounts.map((acc) => (
                        <div key={acc.id} className="flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 rounded-2xl transition-all group cursor-pointer border border-transparent hover:border-gray-100">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-sm" style={{ backgroundColor: acc.color }}>
                                 {acc.label}
                              </div>
                              <div>
                                 <h4 className="font-black text-sm text-gray-900 tracking-tight">{acc.name}</h4>
                                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{acc.desc}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="font-black text-base text-gray-900">{acc.balance}<span className="text-[10px] ml-1 text-gray-400">đ</span></p>
                              <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-[#004D43] transition-colors" />
                           </div>
                        </div>
                      ))}
                   </div>
                   <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center italic">
                     * Dữ liệu chưa bao gồm các khoản nợ đang được xử lý bởi Oracle.
                   </p>
                </section>

                {/* BOTTOM NUDGE: THE POSITIVE ACTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-[#1D1D1F] rounded-[32px] p-8 text-white flex items-center justify-between group cursor-pointer shadow-xl">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <div className="p-1.5 bg-yellow-400 rounded-lg text-black"><Sparkles size={16}/></div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Health Score</span>
                        </div>
                        <p className="text-4xl font-black italic">{financialData.healthScore}</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 tracking-widest">Tốt hơn 85% người dùng</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-white/10 flex items-center justify-center">
                         <TrendingUp size={24} className="text-green-400" />
                      </div>
                   </div>

                   <div className="bg-gradient-to-br from-indigo-600 to-blue-800 rounded-[32px] p-8 text-white flex flex-col justify-between shadow-xl cursor-pointer hover:scale-[1.02] transition-all">
                      <div className="flex items-center gap-2">
                        <BrainCircuit size={20} className="text-blue-200" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Gợi ý từ Oracle</span>
                      </div>
                      <p className="text-sm font-bold leading-relaxed mb-4">
                        "Bạn đang có {financialData.accounts[2].balance}đ dự phòng. Hãy tối ưu lãi suất bằng cách chuyển một phần sang quỹ Money Market."
                      </p>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-xl backdrop-blur-md">
                        Thực hiện ngay <ArrowRight size={14}/>
                      </button>
                   </div>
                </div>
              </>
            )}

            {activeTab !== 'overview' && (
              <div className="h-[50vh] flex flex-col items-center justify-center text-center">
                 <div className="p-6 bg-gray-100 rounded-[32px] text-gray-300 mb-6 animate-pulse">
                    <Activity size={48}/>
                 </div>
                 <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Tính năng {activeTab}</h3>
                 <p className="text-gray-400 text-sm font-medium">Đang đồng bộ dữ liệu vĩ mô theo thời gian thực...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? <LoginWeb /> : <DashboardWeb />}
    </div>
  );
};

export default App;
