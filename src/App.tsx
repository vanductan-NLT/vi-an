import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
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
  LogOut,
  HelpCircle,
  Menu,
  ArrowRight,
  TrendingDown,
  ChevronDown,
  Activity,
  Lock,
  Home,
  Sparkles,
  ShieldAlert,
  RefreshCw,
  Fingerprint,
  Link as LinkIcon,
  Eye,
  EyeOff,
  AlertTriangle,
  BrainCircuit,
  Wallet,
  TrendingUp,
  Compass,
  PieChart,
  Globe,
  Star
} from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // Mặc định vào Tổng quan
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showSensitive, setShowSensitive] = useState(true);

  const APP_NAME = "VÍ AN";

  const financialData = {
    userName: "Nguyễn Minh Triết",
    totalBalance: "85,450,000",
    totalDebt: "15,200,000",
    healthScore: 82,
    lastSync: "10:30 Hôm nay",
    syncSources: [
      { name: "Vietcombank", status: "Connected", icon: "🏦" },
      { name: "Momo", status: "Connected", icon: "📱" },
      { name: "Shopee/SPay", status: "Connected", icon: "🛍️" }
    ],
    accounts: [
      { id: 'sa', name: 'Tích Lũy An Tâm', balance: '42,000,000', change: '+2.4%', icon: Wallet, color: '#3B82F6', label: 'SA', desc: 'Savings Account' },
      { id: 'po', name: 'Phát Triển Oracle', balance: '28,500,000', change: '+12.8%', icon: TrendingUp, color: '#A855F7', label: 'OA', desc: 'Oracle Assets' },
      { id: 'ca', name: 'Tài khoản thanh toán', balance: '14,950,000', change: '-5.2%', icon: CreditCard, color: '#10B981', label: 'MA', desc: 'Main Account' }
    ],
    debts: [
      { id: 1, source: 'SPayLater', amount: '2,500,000', listedRate: '0%', realRate: '24.5%', feeDetails: 'Phí chuyển đổi 2% + Phí quản lý', dueDate: '15/10', riskLevel: 'Critical', color: 'text-red-500', icon: "🛍️" },
      { id: 2, source: 'Visa Platinum', amount: '8,700,000', listedRate: '15%', realRate: '19.2%', feeDetails: 'Lãi gộp + Phí thường niên', dueDate: '20/10', riskLevel: 'Safe', color: 'text-green-500', icon: "💳" },
      { id: 3, source: 'Ví Trả Sau Momo', amount: '4,000,000', listedRate: '0%', realRate: '31.0%', feeDetails: 'Phí dịch vụ 30k/tháng', dueDate: '25/10', riskLevel: 'High', color: 'text-orange-500', icon: "📱" }
    ],
    dominoRisk: 68,
    purchasingPowerLoss: "3,200,000",
    inflationRate: "3.8%",
    marketSentiment: 42,
    portfolio: [
      { name: 'Vàng Nhẫn 9999', desc: 'Tích sản an toàn', balance: '12,500,000', weight: '15%', trend: '+4.2%', color: 'bg-yellow-500' },
      { name: 'Quỹ Cổ Phiếu VN30', desc: 'Tăng trưởng dài hạn', balance: '28,500,000', weight: '35%', trend: '+12.8%', color: 'bg-purple-500' },
      { name: 'Tiền gửi linh hoạt', desc: 'Thanh khoản cao', balance: '42,000,000', weight: '50%', trend: '+2.4%', color: 'bg-blue-500' }
    ],
    goals: [
      { id: 1, name: 'Mua Căn Hộ Studio', target: '2,500,000,000', current: '450,000,000', deadline: '12/2028', icon: Home, color: 'text-blue-600', bg: 'bg-blue-50' },
      { id: 2, name: 'Nghỉ Hưu Sớm (FIRE)', target: '10,000,000,000', current: '1,200,000,000', deadline: '2045', icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-50' },
      { id: 3, name: 'Du Lịch Nhật Bản', target: '60,000,000', current: '45,000,000', deadline: '05/2026', icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50' }
    ]
  };

  const [data, setData] = useState(financialData);
  const [oracleInsight, setOracleInsight] = useState("Đang phân tích dữ liệu tài chính của bạn...");

  useEffect(() => {
    if (isLoggedIn) {
      generateOracleInsight();
    }
  }, [isLoggedIn, data]);

  const generateOracleInsight = async () => {
    try {
      // In a real app, we'd use the Gemini API here.
      // For now, let's simulate a dynamic insight based on data.
      const totalDebt = parseInt(data.totalDebt.replace(/,/g, ''));
      const totalBalance = parseInt(data.totalBalance.replace(/,/g, ''));
      
      if (totalDebt > totalBalance * 0.5) {
        setOracleInsight(`"Cảnh báo: Nợ của bạn đang chiếm ${((totalDebt/totalBalance)*100).toFixed(0)}% tài sản. Hãy ưu tiên trả dứt điểm khoản SPayLater để giảm áp lực lãi suất."`);
      } else {
        setOracleInsight(`"Bạn có ${data.accounts[2].balance}đ nhàn rỗi. Chuyển 5M vào quỹ Oracle ngay hôm nay để đạt mục tiêu 'Ước mơ' sớm hơn 2 tháng."`);
      }
    } catch (error) {
      console.error("Error generating insight:", error);
    }
  };

  const handleAddGoal = () => {
    const newGoal = {
      id: data.goals.length + 1,
      name: 'Mục tiêu mới',
      target: '100,000,000',
      current: '0',
      deadline: '2027',
      icon: Target,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    };
    setData(prev => ({
      ...prev,
      goals: [...prev.goals, newGoal]
    }));
  };

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      // Simulate data update after sync
      setData(prev => ({
        ...prev,
        lastSync: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + " Hôm nay",
        totalBalance: (parseInt(prev.totalBalance.replace(/,/g, '')) + 500000).toLocaleString('vi-VN'),
        marketSentiment: Math.floor(Math.random() * 100)
      }));
    }, 2000);
  };

  const handlePayDebt = (debtId: number) => {
    setData(prev => {
      const debt = prev.debts.find(d => d.id === debtId);
      if (!debt) return prev;
      
      const amount = parseInt(debt.amount.replace(/,/g, ''));
      const newBalance = parseInt(prev.totalBalance.replace(/,/g, '')) - amount;
      
      if (newBalance < 0) {
        alert("Số dư không đủ để thanh toán khoản nợ này!");
        return prev;
      }

      return {
        ...prev,
        totalBalance: newBalance.toLocaleString('vi-VN'),
        totalDebt: (parseInt(prev.totalDebt.replace(/,/g, '')) - amount).toLocaleString('vi-VN'),
        debts: prev.debts.filter(d => d.id !== debtId),
        dominoRisk: Math.max(0, prev.dominoRisk - 20)
      };
    });
  };

  // --- UI COMPONENT: SIDEBAR ---
  const Sidebar = () => (
    <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-100 transition-all duration-300 flex flex-col sticky top-0 h-screen z-50`}>
      <div className="p-8 flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-[#004D43] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-900/20">
          <ShieldCheck size={24} />
        </div>
        {sidebarOpen && <span className="text-2xl font-black tracking-tighter text-[#004D43] uppercase italic">{APP_NAME}</span>}
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {[
          { id: 'overview', icon: LayoutDashboard, label: 'Tổng quan' },
          { id: 'debts', icon: ShieldAlert, label: 'Vững chãi' },
          { id: 'invest', icon: LineChart, label: 'Phát triển' },
          { id: 'goals', icon: Target, label: 'Ước mơ' },
        ].map((item) => {
          const IconComponent = item.icon;
          return (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === item.id ? 'bg-[#004D43] text-white shadow-xl shadow-green-900/20' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <IconComponent size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              {sidebarOpen && <span className="font-bold text-sm">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-50">
         <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-4 p-3 text-red-400 hover:text-red-500 font-bold text-xs uppercase tracking-widest">
            <LogOut size={20} />
            {sidebarOpen && <span>Thoát</span>}
         </button>
      </div>
    </aside>
  );

  // --- UI COMPONENT: TỔNG QUAN CONTENT ---
  const OverviewHub = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
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
              <p className="text-3xl font-black tracking-tighter text-gray-900 italic">{showSensitive ? `${data.totalBalance}đ` : '••••••••'}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 italic">VND • Q1/2024</p>
            </div>
          </div>

          {/* LEGEND / BREAKDOWN (BITE-SIZE CHUNKS) */}
          <div className="w-full space-y-4">
            {data.accounts.map((acc) => (
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
                    <p className="font-black text-base text-gray-900">{showSensitive ? `${acc.balance}đ` : '••••••••'}</p>
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
              <p className="text-4xl font-black italic">{data.healthScore}</p>
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
              {oracleInsight}
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-xl backdrop-blur-md">
              Thực hiện ngay <ArrowRight size={14}/>
            </button>
          </div>
      </div>
    </div>
  );

  // --- UI COMPONENT: PHÁT TRIỂN (INVESTMENT HUB) ---
  const InvestHub = () => (
    <div className="max-w-6xl mx-auto space-y-10 py-4">
      
      {/* 1. The Inflation Thief - Hiển thị "Nỗi đau" lạm phát */}
      <section className="bg-[#1D1D1F] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] opacity-10">
          <TrendingDown size={280} className="text-red-500" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-red-500 rounded-lg text-white">
                <AlertTriangle size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Cảnh báo sức mua</span>
            </div>
            <h2 className="text-4xl font-black italic tracking-tighter leading-none">
              LẠM PHÁT ĐANG "LẤY" CỦA BẠN {data.purchasingPowerLoss}đ/NĂM
            </h2>
            <p className="text-sm text-gray-400 font-medium leading-relaxed italic">
              Dựa trên CPI {data.inflationRate}, nếu bạn để 85 triệu nằm yên trong tài khoản thanh toán, giá trị thực của nó sẽ bốc hơi thầm lặng hàng ngày.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-md text-center shrink-0 min-w-[240px]">
             <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Lãi suất thực sau lạm phát</p>
             <p className="text-5xl font-black text-green-400 italic">1.2%</p>
             <p className="text-[9px] text-gray-400 font-bold uppercase mt-3">Tình trạng: <span className="text-green-400">Đang được bảo vệ</span></p>
          </div>
        </div>
      </section>

      {/* 2. Oracle Dynamic Allocation - Phân bổ tài sản thông minh */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-black">
        
        {/* Left: Asset Portfolio Cards */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-end px-4">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Danh mục Oracle tối ưu</h3>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#004D43] bg-green-50 px-3 py-1 rounded-full">
               <Compass size={12} /> Chiến lược rủi ro trung bình
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.portfolio.map((item, i) => (
              <div key={i} className="bg-white rounded-[32px] p-6 border border-white shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all group overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <PieChart size={24} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {item.trend}
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tighter text-gray-900 uppercase">{item.name}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">{item.desc}</p>
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-black tracking-tighter text-gray-900 italic">{item.balance}đ</p>
                    <span className="text-sm font-black text-gray-300 uppercase italic">{item.weight}</span>
                  </div>
                </div>
                <div className="mt-4 h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                   <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: item.weight }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Market Sentiment & Macro News */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Sentiment Gauge - Giảm "Analysis Paralysis" */}
          <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[300px]">
             <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                      <Activity size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">Cảm xúc thị trường</span>
                  </div>
                  <HelpCircle size={16} className="text-gray-300" />
                </div>

                <div className="relative pt-10 pb-6">
                   <div className="h-2 w-full bg-gray-100 rounded-full relative">
                      <div className="absolute top-1/2 left-0 h-4 w-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 h-4 w-1 bg-gray-200 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
                      <div className="absolute top-1/2 right-0 h-4 w-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
                      <div 
                        className="absolute top-1/2 h-6 w-6 bg-[#1D1D1F] border-4 border-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-xl transition-all duration-1000 ease-out"
                        style={{ left: `${data.marketSentiment}%` }}
                      ></div>
                   </div>
                   <div className="flex justify-between mt-4 text-[9px] font-black uppercase tracking-widest text-gray-400">
                      <span>Sợ hãi</span>
                      <span className="text-purple-600 italic">Thận trọng</span>
                      <span>Tham lam</span>
                   </div>
                </div>

                <p className="text-[11px] font-medium leading-relaxed text-gray-500 italic mt-4">
                  "Thị trường đang có xu hướng thận trọng sau kỳ họp của Fed. Đây là thời điểm tốt để tích lũy Vàng thay vì Chứng khoán rủi ro."
                </p>
             </div>

             <button className="w-full py-4 mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-purple-900/20 transition-all active:scale-95">
                Xem kịch bản thị trường
             </button>
          </div>

          {/* AI Oracle Insight - Behavioral Nudge */}
          <div className="bg-gradient-to-br from-[#004D43] to-[#002a24] rounded-[32px] p-8 text-white shadow-xl flex flex-col justify-between min-h-[220px]">
             <div>
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit size={18} className="text-green-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-300">Gợi ý từ Oracle</span>
                </div>
                <h4 className="text-lg font-bold leading-snug italic mb-4">
                  "Bạn có 12.5M tiền mặt đang sinh lời thấp. Oracle đề xuất dịch chuyển 5M sang Vàng nhẫn để tối ưu lợi nhuận thực tế."
                </h4>
             </div>
             <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors">
                Tối ưu ngay lập tức <ArrowRight size={16}/>
             </button>
          </div>
        </div>
      </div>
      
      {/* 3. Global Macro Context */}
      <section className="bg-blue-50 rounded-[40px] p-8 border border-blue-100 flex flex-col md:flex-row items-center gap-8">
         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
            <Globe size={28} />
         </div>
         <div className="flex-1 text-center md:text-left">
            <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-1 italic">Bối cảnh vĩ mô toàn cầu</h4>
            <p className="text-xs text-blue-800 font-medium leading-relaxed">
              Lãi suất ngân hàng trung ương đang có xu hướng giảm. Theo quy luật chu kỳ tiền tệ, đây là dấu hiệu bắt đầu của một đợt tăng giá tài sản mới. Bạn đã sẵn sàng để đón đầu chưa?
            </p>
         </div>
         <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-200">
            Xem báo cáo tháng
         </button>
      </section>

    </div>
  );

  // --- UI COMPONENT: ƯỚC MƠ (GOALS HUB) ---
  const GoalsHub = () => (
    <div className="max-w-6xl mx-auto space-y-10 py-4 text-black">
      
      {/* 1. Master Projection Card - Động lực tối thượng */}
      <section className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-[-20%] right-[-5%] opacity-[0.03] pointer-events-none">
          <Star size={300} />
        </div>
        <div className="relative z-10 space-y-4 max-w-xl">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-yellow-400 rounded-lg text-black">
              <Trophy size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Dự báo Tự do tài chính</span>
          </div>
          <h2 className="text-4xl font-black italic tracking-tighter leading-tight">
            BẠN SẼ ĐẠT ĐƯỢC TỰ DO TÀI CHÍNH VÀO <span className="text-[#004D43]">THÁNG 08/2042</span>
          </h2>
          <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
            Dựa trên tốc độ tích lũy hiện tại và lợi nhuận 8.5%/năm từ chiến lược Oracle. Bạn đang đi nhanh hơn 15% so với kế hoạch ban đầu.
          </p>
        </div>
        <div className="bg-[#1D1D1F] p-8 rounded-[32px] text-white text-center shrink-0 min-w-[260px] shadow-2xl">
           <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Tiến độ tổng thể</p>
           <p className="text-5xl font-black italic text-green-400">12.4%</p>
           <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-green-400 transition-all duration-1000" style={{ width: '12.4%' }}></div>
           </div>
        </div>
      </section>

      {/* 2. Goals Grid - Danh sách ước mơ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-end px-4">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Lộ trình Ước mơ</h3>
            <button 
              onClick={handleAddGoal}
              className="text-[10px] font-black text-[#004D43] bg-green-50 px-4 py-2 rounded-full hover:bg-[#004D43] hover:text-white transition-all"
            >
              + THÊM ƯỚC MƠ MỚI
            </button>
          </div>

          <div className="space-y-4">
            {data.goals.map((goal) => {
              const GoalIcon = goal.icon;
              const progress = (parseInt(goal.current.replace(/,/g, '')) / parseInt(goal.target.replace(/,/g, ''))) * 100;
              
              return (
                <div key={goal.id} className="bg-white rounded-[32px] p-8 border border-white shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all group overflow-hidden relative">
                  <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                     <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 ${goal.bg} ${goal.color} rounded-[24px] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
                          <GoalIcon size={32} />
                        </div>
                        <div>
                          <h4 className="font-black text-xl tracking-tighter text-gray-900 uppercase italic">{goal.name}</h4>
                          <div className="flex items-center gap-3 mt-1">
                             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hạn chót: {goal.deadline}</span>
                             <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                             <span className={`text-[10px] font-black uppercase tracking-widest ${goal.color}`}>Tiến độ: {progress.toFixed(1)}%</span>
                          </div>
                        </div>
                     </div>
                     <div className="text-left md:text-right flex flex-col justify-center">
                        <p className="text-2xl font-black tracking-tighter text-gray-900">{showSensitive ? `${goal.current}đ` : '••••••••'}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase mt-1">Mục tiêu: {goal.target}đ</p>
                     </div>
                  </div>

                  <div className="mt-8">
                    <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden">
                       <div className={`h-full bg-[#004D43] transition-all duration-1000 ease-out`} style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Clock size={14} className="text-gray-300" />
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                          Dự kiến hoàn thành đúng hạn
                        </p>
                     </div>
                     <button className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <ChevronRight size={20} className="text-gray-400" />
                     </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Behavioral Nudges & Oracle Tips */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* The "Nudge" Card - Sức mạnh của sự thay đổi nhỏ */}
          <div className="bg-gradient-to-br from-[#004D43] to-[#002a24] rounded-[40px] p-8 text-white shadow-xl flex flex-col justify-between min-h-[340px] relative overflow-hidden">
             <div className="absolute top-[-5%] right-[-5%] opacity-10"><Sparkles size={150} /></div>
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <Zap size={20} className="text-yellow-400" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-300">Cú hích tài chính</span>
                </div>

                <h4 className="text-2xl font-black italic tracking-tighter leading-tight mb-6">
                  TIẾT KIỆM 1 LY TRÀ SỮA MỖI NGÀY?
                </h4>

                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md mb-8">
                   <p className="text-sm font-medium leading-relaxed text-gray-200 italic">
                    Nếu bạn chuyển 1.5M/tháng tiền cafe sang tích lũy, bạn sẽ sở hữu <span className="text-green-400 font-black">"Căn hộ đầu tiên"</span> sớm hơn <span className="text-green-400 font-black">8 THÁNG</span>.
                   </p>
                </div>
             </div>

             <button className="relative z-10 w-full py-4 bg-white text-[#004D43] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95">
                Áp dụng thử thách ngay
             </button>
          </div>

          {/* Social Proof Card - Behavioral Science */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[200px]">
             <div>
                <div className="flex items-center gap-2 mb-4">
                  <Activity size={18} className="text-blue-600" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cộng đồng VÍ AN</span>
                </div>
                <p className="text-sm font-bold text-gray-700 leading-snug">
                  85% người dùng cùng độ tuổi với bạn đã hoàn thành mục tiêu "Quỹ khẩn cấp" trong vòng 12 tháng.
                </p>
             </div>
             <div className="flex -space-x-2 mt-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i*100} flex items-center justify-center text-[10px] font-black text-gray-400`}>
                    MT
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[8px] font-black text-white">
                  +2k
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  );

  // --- UI COMPONENT: VỮNG CHÃI CONTENT ---
  const DebtHub = () => (
    <div className="max-w-6xl mx-auto space-y-10 py-4">
      
      {/* Top Section: Identity & Sync Connection */}
      <section className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-[#F0FDF4] rounded-[24px] flex items-center justify-center text-[#004D43] shadow-inner">
            <Fingerprint size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-black tracking-tight text-gray-900 italic uppercase">Xác thực VNeID</h2>
              <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] font-black rounded-full uppercase">Live Sync</div>
            </div>
            <div className="flex gap-2">
              {data.syncSources.map((s, i) => (
                <span key={i} className="text-[10px] bg-gray-50 px-2 py-1 rounded-lg font-bold text-gray-400 border border-gray-100">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto">
          <div className="flex-1 lg:flex-none text-right hidden sm:block mr-4">
             <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Lần cuối đồng bộ</p>
             <p className="text-xs font-black text-gray-900">{data.lastSync}</p>
          </div>
          <button 
            onClick={handleSync}
            className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-[#004D43] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg shadow-green-900/20 active:scale-95 transition-all"
          >
            <RefreshCw size={16} className={isSyncing ? "animate-spin" : ""} />
            {isSyncing ? "Đang quét dữ liệu..." : "Đồng bộ ngay"}
          </button>
        </div>
      </section>

      {/* Main Grid: Data Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Debt Aggregator (The Truth) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-end px-4">
            <div className="flex items-center gap-2">
               <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Hợp nhất nợ rời rạc</h3>
               <button onClick={() => setShowSensitive(!showSensitive)} className="text-gray-300 hover:text-gray-500">
                  {showSensitive ? <Eye size={16} /> : <EyeOff size={16} />}
               </button>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#004D43] bg-green-50 px-3 py-1 rounded-full">
               <BrainCircuit size={12} /> Powered by Oracle AI
            </div>
          </div>

          <div className="space-y-4">
            {data.debts.map((debt) => (
              <div key={debt.id} className="bg-white rounded-[32px] p-7 border border-white shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all group overflow-hidden relative">
                <div className="flex justify-between items-center relative z-10 text-black">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">
                        {debt.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-lg tracking-tighter text-gray-900 uppercase">{debt.source}</h4>
                        <div className="flex items-center gap-3 mt-1">
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Niêm yết: {debt.listedRate}</span>
                           <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                           <span className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1">
                              <AlertTriangle size={12} /> Lãi thực: {debt.realRate}
                           </span>
                        </div>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-2xl font-black tracking-tighter text-gray-900 italic">
                        {showSensitive ? `${debt.amount}đ` : '••••••••'}
                      </p>
                      <p className="text-[10px] font-black text-gray-400 uppercase mt-1">Đáo hạn: {debt.dueDate}</p>
                   </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
                        <Info size={16} />
                      </div>
                      <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                        Phân tích phí ẩn: <span className="text-gray-900 font-black">{debt.feeDetails}</span>. 
                        Bạn đang trả thêm <span className="text-red-500 font-bold">~120k/tháng</span> so với quảng cáo.
                      </p>
                   </div>
                   <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handlePayDebt(debt.id)}
                        className="px-6 py-2.5 bg-[#004D43] text-white hover:bg-[#003a32] rounded-xl font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap"
                      >
                         Thanh toán ngay
                      </button>
                      <button className="px-6 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap">
                         Chi tiết phí
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Risk & Behavioral Science Nudges */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Domino Risk Meter */}
          <div className="bg-[#1D1D1F] rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
             <div className="absolute top-[-10%] right-[-10%] opacity-[0.03]">
                <ShieldAlert size={250} className="text-red-500" />
             </div>
             
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-red-500/20 text-red-500 rounded-xl">
                      <ShieldAlert size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Rủi ro Domino</span>
                  </div>
                  <HelpCircle size={16} className="text-gray-600" />
                </div>

                <div className="flex flex-col items-center mb-10">
                   <div className="relative w-40 h-40">
                      <svg className="w-full h-full transform -rotate-90">
                         <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                         <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="440" strokeDashoffset={440 - (440 * data.dominoRisk) / 100} className="text-red-500 transition-all duration-1000 ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-5xl font-black italic tracking-tighter">{data.dominoRisk}%</span>
                         <span className="text-[10px] font-black text-red-500 uppercase mt-1">Nguy cấp</span>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                   <p className="text-[11px] font-medium leading-relaxed text-gray-400">
                      <span className="text-white font-black block mb-1 uppercase tracking-tighter italic text-xs">Phân tích Oracle:</span>
                      Nếu trễ hạn khoản <span className="text-red-400 font-bold uppercase">SPayLater</span>, điểm tín dụng của bạn sẽ giảm <span className="text-red-400 font-bold">115 điểm</span>, kích hoạt tăng lãi suất cho các khoản vay tiếp theo.
                   </p>
                </div>
             </div>

             <button className="relative z-10 w-full py-5 bg-red-600 hover:bg-red-700 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-red-950 transition-all active:scale-95">
                Kế hoạch giải cứu
             </button>
          </div>

          {/* Behavioral Nudge Card */}
          <div className="bg-gradient-to-br from-[#004D43] to-[#002a24] rounded-[32px] p-8 text-white shadow-xl flex flex-col justify-between min-h-[220px]">
             <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={18} className="text-yellow-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-300">Chiến lược Snowball</span>
                </div>
                <p className="text-sm font-bold leading-snug italic">
                  "Hãy trả hết 2,5M của SPayLater trước. Dù lãi cao nhưng số tiền nhỏ, hoàn thành nó sẽ tạo ra hưng phấn tâm lý để bạn thắng các khoản lớn hơn."
                </p>
             </div>
             <button className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors">
                Xem lộ trình 8 tháng <ArrowRight size={16}/>
             </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-6 font-sans">
        <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-[#004D43] p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-4 gap-8 p-10">
                {[...Array(12)].map((_, i) => <ShieldCheck key={i} size={100} className="text-white" />)}
              </div>
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 mb-10 backdrop-blur-md">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h1 className="text-white text-7xl font-black leading-none tracking-tighter mb-8 uppercase italic">{APP_NAME}</h1>
              <p className="text-white/70 text-xl max-w-sm leading-relaxed font-medium italic">An tâm tài chính chuẩn Singapore.</p>
            </div>
          </div>
          <div className="p-16 flex flex-col justify-center text-black">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4 italic tracking-tighter uppercase">Thấu hiểu dòng tiền</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">Đăng nhập với danh tính số VNeID để tự động hóa việc quản trị nợ và đầu tư.</p>
            </div>
            <button onClick={() => setIsLoggedIn(true)} className="w-full bg-[#004D43] text-white py-6 rounded-[24px] font-black flex items-center justify-center gap-4 transition-all hover:bg-[#003a32] active:scale-[0.98] shadow-2xl shadow-green-900/20 uppercase tracking-[0.2em] text-sm">
              <UserCheck size={24} /> Đăng nhập qua VNeID
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-4 text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">
               {activeTab === 'overview' ? 'Bảng điều khiển trung tâm' : activeTab}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-gray-900">{data.userName}</p>
              <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest italic">Member Platinum</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-black text-[#004D43] text-xs">MT</div>
          </div>
        </header>

        <div className="p-8 max-w-4xl mx-auto w-full space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === 'overview' && <OverviewHub />}
              {activeTab === 'debts' && <DebtHub />}
              {activeTab === 'invest' && <InvestHub />}
              {activeTab === 'goals' && <GoalsHub />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;
