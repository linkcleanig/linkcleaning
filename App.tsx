
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Info, 
  LayoutGrid, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ArrowRight,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Building2,
  UserCheck,
  ChevronsLeftRight,
  Droplets,
  Paintbrush,
  CalendarDays,
  Flame,
  Zap,
  ShieldCheck,
  Box,
  Instagram,
  Calendar,
  ChevronDown,
  Star,
  Award,
  Users,
  Target,
  Loader2,
  Camera,
  Upload,
  Edit3,
  Waves
} from 'lucide-react';

import { 
  SiteSettings, 
  ServiceInfo, 
  PortfolioItem, 
  Inquiry, 
  MajorCategory,
  ServiceCategory 
} from './types';

import { 
  INITIAL_SETTINGS, 
  INITIAL_SERVICES, 
  INITIAL_PORTFOLIO,
  LUCKY_DAYS_DATA
} from './constants';

// --- Global Context Mock ---
const useStore = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('lc_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const [services, setServices] = useState<ServiceInfo[]>(() => {
    const saved = localStorage.getItem('lc_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('lc_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('lc_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('lc_settings', JSON.stringify(settings));
    localStorage.setItem('lc_services', JSON.stringify(services));
    localStorage.setItem('lc_portfolio', JSON.stringify(portfolio));
    localStorage.setItem('lc_inquiries', JSON.stringify(inquiries));
  }, [settings, services, portfolio, inquiries]);

  return { 
    settings, setSettings, 
    services, setServices, 
    portfolio, setPortfolio, 
    inquiries, setInquiries 
  };
};

// --- Specialized Components ---

/**
 * Premium Designed Logo Component
 */
const MainLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const containerClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 32
  };

  return (
    <div className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg overflow-hidden group transition-all duration-500 hover:rotate-6 ${containerClasses[size]}`}>
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-white"></div>
      
      {/* Animated Sparkles */}
      <Sparkles 
        size={iconSizes[size]} 
        className="text-white z-10 animate-pulse group-hover:scale-110 transition-transform" 
      />
      
      {/* Glowing Border Overlay */}
      <div className="absolute inset-0 border border-white/30 rounded-2xl pointer-events-none group-hover:border-white/60 transition-colors"></div>
      
      {/* Bottom Shine Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent"></div>
    </div>
  );
};

const SparkleBackground: React.FC = () => {
  const sparkles = useRef([...Array(15)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${4 + Math.random() * 3}s`,
    size: 10 + Math.random() * 15,
  }))).current;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <div 
          key={i}
          className="absolute text-white/30 animate-twinkle star-glow"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration
          }}
        >
          <Star size={s.size} fill="white" />
        </div>
      ))}
    </div>
  );
};

const LuckyDaysCalendar: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState('26년 2월');
  const months = Object.keys(LUCKY_DAYS_DATA);

  return (
    <section id="lucky-days" className="py-16 bg-white border-b border-sky-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-custom rounded-2xl flex items-center justify-center">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">2026년 손없는 날 안내</h2>
              <p className="text-sm text-slate-500">이사하기 좋은 길일을 확인하고 미리 청소를 예약하세요.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                  activeMonth === month 
                  ? 'bg-purple-custom text-white border-purple-custom shadow-md' 
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-purple-200'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-sky-50 rounded-[2.5rem] p-8 md:p-12 border border-sky-100 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold text-purple-custom mb-4">{activeMonth} 길일 리스트</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                민속 신앙에서 '손(악귀)'이 활동하지 않는 날로, 이사나 개업 등 중요한 행사를 치르기에 가장 좋은 날들입니다. 
                해당 일자는 예약이 빠르게 마감되오니 조기 예약을 권장드립니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:010-7161-1144" 
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-purple-custom transition-all shadow-lg"
                >
                  <Phone size={18} className="mr-2" /> 바로 예약 전화하기
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-md"
                >
                  온라인 문의 신청 <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {LUCKY_DAYS_DATA[activeMonth].map((day) => (
                <div key={day} className="bg-white aspect-square w-24 md:w-28 rounded-3xl flex flex-col items-center justify-center shadow-sm border border-sky-100 group hover:border-purple-300 transition-all">
                  <span className="text-slate-400 text-[10px] font-bold uppercase mb-1">{activeMonth.split(' ')[1]}</span>
                  <span className="text-3xl font-extrabold text-slate-900 group-hover:text-purple-custom transition-colors">{day}</span>
                  <span className="text-purple-custom text-[10px] font-bold mt-1">길일</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingSideContact: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  return (
    <div className="fixed right-6 bottom-32 z-50 flex flex-col space-y-4 items-center">
      <a 
        href={settings.kakaoLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="animate-bob w-14 h-14 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center text-[#3c1e1e] hover:scale-110 transition-transform group relative"
      >
        <MessageSquare size={24} fill="currentColor" />
        <span className="absolute right-full mr-3 bg-white px-2 py-1 rounded text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">카카오톡 문의</span>
      </a>

      <a 
        href={settings.naverTalkLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="animate-bob-delayed w-14 h-14 bg-[#03C75A] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform group relative"
      >
        <MessageSquare size={24} />
        <span className="absolute right-full mr-3 bg-white px-2 py-1 rounded text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">네이버 톡톡</span>
      </a>

      <a 
        href={settings.instagramLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="animate-bob-more-delayed w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform group relative"
      >
        <Instagram size={24} />
        <span className="absolute right-full mr-3 bg-white px-2 py-1 rounded text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">인스타그램</span>
      </a>
    </div>
  );
};

const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-80 overflow-hidden cursor-col-resize select-none bg-slate-200"
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-4 right-4 z-10 bg-purple-custom text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">AFTER</div>
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 * (100 / sliderPos)}%` }} />
        <div className="absolute top-4 left-4 z-10 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">BEFORE</div>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 0.5px)` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-custom rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white transition-transform duration-200" style={{ transform: `translate(-50%, -50%) scale(${isDragging ? 1.2 : 1})` }}>
          <ChevronsLeftRight size={16} />
        </div>
      </div>
    </div>
  );
};

// --- Layout Components ---

const Header: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '회사소개', path: '/about' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '문의보내기', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <MainLogo size="md" />
            <span className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-custom transition-colors">
              {settings.siteName}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-purple-custom underline decoration-2 underline-offset-8' : 'text-slate-600 hover:text-purple-custom'}`}>
                {link.name}
              </Link>
            ))}
            <Link to="/admin" className="p-2 text-slate-400 hover:text-purple-custom transition-colors" title="관리자 대시보드">
              <Settings size={20} />
            </Link>
          </nav>
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/admin" className="text-slate-400"><Settings size={20} /></Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sky-100 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-sky-50 rounded-md transition-colors">{link.name}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <MainLogo size="sm" />
            <span className="text-2xl font-bold text-white tracking-tight">{settings.siteName}</span>
          </div>
          <p className="mb-6 max-w-md">제주 전역의 쾌적한 주거 및 업무 환경을 위해 최신 장비와 프리미엄 친환경 세제를 사용하여 최상의 클리닝 서비스를 제공합니다.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">고객지원 및 위치</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-purple-400" /><span className="text-white font-bold">{settings.phone}</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-purple-400 mt-1 flex-shrink-0" />
              <div className="flex flex-col space-y-2">
                {settings.address.split(' / ').map((addr, idx) => (
                  <span key={idx} className="text-sm bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700">{addr}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm text-center">© 2016 {settings.siteName}. All rights reserved.</div>
    </footer>
  );
};

// --- Views ---

const Home: React.FC<{ settings: SiteSettings; services: ServiceInfo[]; portfolio: PortfolioItem[] }> = ({ settings, services, portfolio }) => {
  return (
    <div className="animate-in fade-in duration-700 relative z-10">
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2070" alt="Jeju Landscape" className="w-full h-full object-cover brightness-75 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-5 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full shadow-lg">Jeju Premium Space Management</span>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.15] drop-shadow-2xl">{settings.heroTitle}</h1>
            <p className="text-lg md:text-2xl mb-12 text-slate-200 drop-shadow-md max-w-2xl mx-auto leading-relaxed font-light whitespace-pre-line">
              {settings.heroSubtitle}
            </p>
            <div className="flex justify-center animate-bounce mt-12 opacity-50"><ChevronDown size={32} /></div>
          </div>
        </div>
      </section>
      
      <LuckyDaysCalendar />

      <section id="services" className="py-24 bg-sky-custom/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-custom font-bold tracking-tighter text-sm mb-2 block uppercase">Our Expertise</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">링크클린 핵심 전문 솔루션</h2>
            <div className="w-16 h-1 bg-purple-custom mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-sky-100 group flex flex-col h-full hover:-translate-y-2">
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-custom group-hover:text-white transition-all text-purple-custom shadow-sm">
                  {service.majorCategory === MajorCategory.LUCKY_DAYS && <CalendarDays size={32} />}
                  {service.majorCategory === MajorCategory.PROFESSIONAL && <Sparkles size={32} />}
                  {service.majorCategory === MajorCategory.SPECIAL && <Flame size={32} />}
                  {service.majorCategory === MajorCategory.APPLIANCE && <Zap size={32} />}
                  {service.majorCategory === MajorCategory.PREVENTIVE && <ShieldCheck size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{service.description}</p>
                <div className="flex-grow">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">세부 서비스 항목</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.subCategories.map((sub, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">{sub}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-8 mt-auto">
                  <Link to="/contact" className="text-purple-custom font-extrabold text-sm flex items-center group-hover:translate-x-1 transition-transform">견적 신청하기 <ChevronRight size={16} className="ml-1" /></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Villa/Regular Management CTA Card - Restored */}
          <div className="max-w-4xl mx-auto bg-slate-900 p-10 md:p-14 rounded-[3rem] shadow-2xl text-white flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex-1">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Building2 size={32} className="text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">별장 / 정기관리 문의</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                별장, 펜션, 법인 숙소 등 제주의 특별한 공간들을 위한 정기적인 케어가 필요하신가요? 링크클린만의 체계적인 관리 솔루션을 제안해드립니다.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link to="/contact" className="inline-block px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-1">
                별장/정기상담 바로가기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight Section */}
      <section className="py-24 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">시공 전후 리얼 데이터</h2>
              <p className="text-slate-600">링크클린의 정직한 시공 사례를 직접 확인해 보세요.</p>
            </div>
            <Link to="/portfolio" className="flex items-center text-purple-custom font-bold hover:underline">
              전체 포트폴리오 보기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {portfolio.slice(0, 2).map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl bg-white transition-all hover:shadow-purple-100/50">
                <BeforeAfterSlider before={item.beforeImg} after={item.afterImg} />
                <div className="p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-50 text-purple-custom text-[10px] font-bold uppercase tracking-widest rounded-full">{item.majorCategory}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-400 text-xs font-bold">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 relative z-10">
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 bg-purple-custom text-white text-xs font-bold rounded-full uppercase tracking-widest">About Link Clean</span>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">공간의 가치를 잇는<br/>정직한 땀방울, 링크클린</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">단순히 쓸고 닦는 것이 아닌, 고객님의 건강한 일상과 공간 본연의 아름다움을 되찾아드리는 전문 클리닝 그룹입니다.</p>
        </div>
      </section>
      <section className="py-24 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-8 border-purple-custom pl-6">우리의 철학 (Philosophy)</h2>
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p><strong>링크클린(Link Clean)</strong>은 '연결(Link)'과 '깨끗함(Clean)'의 합성어입니다. 우리는 깨끗한 공간이 사람의 마음과 건강, 그리고 새로운 시작을 잇는 가교 역할을 한다고 믿습니다.</p>
                <p>2016년 제주에서 첫 발을 내디딘 이후, 제주 특유의 기후와 환경을 가장 잘 이해하는 로컬 전문가로서 신뢰를 쌓아왔습니다.</p>
              </div>
            </div>
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1581578731522-745d05db9a26?auto=format&fit=crop&q=80&w=1000" alt="Team" className="rounded-[3rem] shadow-2xl border-8 border-white transition-transform group-hover:scale-[1.02] duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact: React.FC<{ settings: SiteSettings; services: ServiceInfo[]; inquiries: Inquiry[]; setInquiries: React.Dispatch<React.SetStateAction<Inquiry[]>> }> = ({ settings, services, inquiries, setInquiries }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: '입주청소', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xgokkpaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', serviceType: '입주청소', message: '' });
      } else {
        alert("오류가 발생했습니다.");
      }
    } catch (error) {
      alert("전송 중 연결 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 bg-white/40 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">문의 보내기</h1>
        </div>
        <div className="max-w-3xl mx-auto bg-sky-50/80 backdrop-blur-md p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-sky-100">
          {submitted ? (
            <div className="text-center py-16 animate-in zoom-in">
              <CheckCircle size={48} className="mx-auto text-green-500 mb-8" />
              <h3 className="text-3xl font-bold mb-4">문의 접수 완료!</h3>
              <button onClick={() => setSubmitted(false)} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl">새로 작성</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="성함 입력" className="w-full px-5 py-4 bg-white border border-sky-200 rounded-2xl outline-none" />
                <input required type="tel" name="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="연락처" className="w-full px-5 py-4 bg-white border border-sky-200 rounded-2xl outline-none" />
              </div>
              <select name="service" value={formData.serviceType} onChange={e => setFormData({...formData, serviceType: e.target.value})} className="w-full px-5 py-4 bg-white border border-sky-200 rounded-2xl outline-none font-bold">
                {services.map(g => g.subCategories.map(s => <option key={s} value={s}>{s}</option>))}
              </select>
              <textarea rows={6} required name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="문의 내용을 상세히 적어주세요." className="w-full px-5 py-4 bg-white border border-sky-200 rounded-2xl outline-none"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-purple-custom text-white font-black text-xl rounded-2xl shadow-xl flex items-center justify-center gap-3">
                {isSubmitting ? <Loader2 className="animate-spin" /> : '문의 신청하기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC<{ portfolio: PortfolioItem[]; setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>> }> = ({ portfolio, setPortfolio }) => {
  const [showForm, setShowForm] = useState(false);
  const [newPf, setNewPf] = useState<Partial<PortfolioItem>>({
    title: '', description: '', category: '입주청소', majorCategory: MajorCategory.PROFESSIONAL,
    beforeImg: 'https://images.unsplash.com/photo-1581578731522-745d05db9a26?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=crop&q=80&w=800'
  });

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPf.title) return;
    const item: PortfolioItem = {
      id: Date.now().toString(),
      title: `[고객후기] ${newPf.title}`,
      description: newPf.description || '',
      category: newPf.category as ServiceCategory,
      majorCategory: MajorCategory.PROFESSIONAL,
      beforeImg: newPf.beforeImg!,
      afterImg: newPf.afterImg!,
      date: new Date().toLocaleDateString()
    };
    setPortfolio([item, ...portfolio]);
    setShowForm(false);
    setNewPf({ title: '', description: '' });
    alert("소중한 시공 사례/후기가 등록되었습니다!");
  };

  return (
    <div className="py-24 bg-sky-custom/40 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">시공 포트폴리오</h2>
          <p className="text-slate-600 mb-8">링크클린의 전문성과 고객님의 만족이 담긴 현장 스토리입니다.</p>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-8 py-4 bg-purple-custom text-white font-bold rounded-2xl shadow-lg hover:-translate-y-1 transition-all gap-2"
          >
            {showForm ? <X size={20} /> : <Edit3 size={20} />}
            {showForm ? "작성 취소" : "나의 시공 후기/사례 올리기"}
          </button>
        </div>

        {showForm && (
          <div className="max-w-3xl mx-auto mb-20 bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-purple-100 animate-in slide-in-from-top-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Camera className="text-purple-custom" /> 시공 사례 간편 등록
            </h3>
            <form onSubmit={handleGuestSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">시공 현장/제목</label>
                  <input required type="text" value={newPf.title} onChange={e => setNewPf({...newPf, title: e.target.value})} placeholder="예: 아라동 아파트 입주청소" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-200" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">서비스 분류</label>
                  <select value={newPf.category} onChange={e => setNewPf({...newPf, category: e.target.value as ServiceCategory})} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold">
                    <option value="입주청소">입주청소</option>
                    <option value="이사청소">이사청소</option>
                    <option value="에어컨청소">에어컨청소</option>
                    <option value="줄눈시공">줄눈시공</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">만족하셨던 점/내용</label>
                <textarea required rows={4} value={newPf.description} onChange={e => setNewPf({...newPf, description: e.target.value})} placeholder="청소 후 바뀐 공간의 느낌을 적어주세요." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-200"></textarea>
              </div>
              <div className="p-6 bg-sky-50 rounded-2xl border-2 border-dashed border-sky-200 text-center">
                 <Upload size={32} className="mx-auto text-sky-400 mb-2" />
                 <p className="text-sm text-slate-500">현재 샘플 이미지로 자동 등록됩니다.<br/>(실제 서비스 시 파일 업로드 기능이 활성화됩니다.)</p>
              </div>
              <button type="submit" className="w-full py-5 bg-slate-900 text-white font-black text-xl rounded-2xl shadow-xl hover:bg-purple-custom transition-all">
                포트폴리오 등록하기
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.map((item) => (
            <div key={item.id} className="bg-white/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-lg group border border-slate-100 transition-all hover:shadow-2xl">
              <BeforeAfterSlider before={item.beforeImg} after={item.afterImg} />
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-purple-custom font-bold text-[10px] uppercase tracking-tighter bg-purple-50 px-3 py-1 rounded-full">{item.majorCategory}</span>
                  <span className="text-slate-400 text-xs flex items-center"><Clock size={12} className="mr-1" /> {item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-custom transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Admin: React.FC<{ settings: SiteSettings; setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>; inquiries: Inquiry[]; portfolio: PortfolioItem[]; setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>; services: ServiceInfo[] }> = ({ settings, setSettings, inquiries, portfolio, setPortfolio, services }) => {
  const [tab, setTab] = useState<'general' | 'inquiries' | 'portfolio'>('general');
  const [newPf, setNewPf] = useState<Partial<PortfolioItem>>({ title: '', description: '', category: '입주청소', majorCategory: MajorCategory.PROFESSIONAL, beforeImg: 'https://picsum.photos/seed/before/800/600', afterImg: 'https://picsum.photos/seed/after/800/600' });

  const addPortfolio = () => {
    if (!newPf.title) return;
    const item: PortfolioItem = { id: Date.now().toString(), title: newPf.title!, description: newPf.description || '', category: newPf.category as ServiceCategory, majorCategory: newPf.majorCategory as MajorCategory, beforeImg: newPf.beforeImg!, afterImg: newPf.afterImg!, date: new Date().toLocaleDateString() };
    setPortfolio([item, ...portfolio]);
    setNewPf({ title: '', description: '' });
  };

  const deletePortfolio = (id: string) => setPortfolio(portfolio.filter(p => p.id !== id));

  return (
    <div className="min-h-screen bg-slate-50 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <Settings className="text-purple-custom" /><h1 className="text-3xl font-bold">관리자 대시보드</h1>
        </div>
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {['general', 'inquiries', 'portfolio'].map(t => (
            <button key={t} onClick={() => setTab(t as any)} className={`px-6 py-2 rounded-xl font-bold shadow-sm whitespace-nowrap ${tab === t ? 'bg-purple-custom text-white' : 'bg-white text-slate-600'}`}>{t === 'general' ? '기본설정' : t === 'inquiries' ? '상담현황' : '포트폴리오관리'}</button>
          ))}
        </div>
        {tab === 'portfolio' && (
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-8">시공 사례 등록</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" value={newPf.title} onChange={e => setNewPf({...newPf, title: e.target.value})} placeholder="제목" className="w-full p-4 border rounded-xl" />
                <button onClick={addPortfolio} className="py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg">게시하기</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map(p => (
                <div key={p.id} className="bg-white p-5 rounded-[2rem] flex items-center space-x-5 shadow-sm">
                  <img src={p.afterImg} className="w-16 h-16 object-cover rounded-xl" alt="" />
                  <div className="flex-1 overflow-hidden"><h4 className="font-bold truncate">{p.title}</h4></div>
                  <button onClick={() => deletePortfolio(p.id)} className="text-red-400 p-2"><Trash2 size={20} /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const store = useStore();
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-purple-100 selection:text-purple-custom relative overflow-x-hidden">
        <SparkleBackground />
        <Header settings={store.settings} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home settings={store.settings} services={store.services} portfolio={store.portfolio} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio portfolio={store.portfolio} setPortfolio={store.setPortfolio} />} />
            <Route path="/contact" element={<Contact settings={store.settings} services={store.services} inquiries={store.inquiries} setInquiries={store.setInquiries} />} />
            <Route path="/admin" element={<Admin settings={store.settings} setSettings={store.setSettings} inquiries={store.inquiries} portfolio={store.portfolio} setPortfolio={store.setPortfolio} services={store.services} />} />
          </Routes>
        </main>
        <FloatingSideContact settings={store.settings} />
        <Footer settings={store.settings} />
      </div>
    </Router>
  );
};

export default App;
