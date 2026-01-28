import React from 'react';
import { Phone, Calendar, CheckCircle, Star, ShieldCheck } from 'lucide-react';

// 모든 컴포넌트를 하나의 파일에 합쳤습니다. 
// 이렇게 하면 파일이 없어서 생기는 오류를 방지할 수 있습니다.

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
    <div className="text-2xl font-black text-[#7B39FD]">링크클린</div>
    <nav className="hidden md:flex space-x-6 font-medium text-gray-600">
      <a href="#" className="hover:text-[#7B39FD]">서비스</a>
      <a href="#" className="hover:text-[#7B39FD]">포트폴리오</a>
      <a href="#" className="hover:text-[#7B39FD]">예약안내</a>
    </nav>
    <button className="bg-[#7B39FD] text-white px-5 py-2 rounded-full font-bold text-sm">상담신청</button>
  </header>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 text-center bg-[#F2F7FF]">
    <div className="inline-block bg-white border border-purple-100 px-4 py-1 rounded-full text-[#7B39FD] text-sm font-bold mb-6">
      제주 프리미엄 청소 솔루션
    </div>
    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
      제주의 깨끗함,<br /><span className="text-[#7B39FD]">공간의 품격</span>을 깨우다
    </h1>
    <p className="text-gray-600 mb-10 max-w-xl mx-auto">링크클린만의 특수 장비와 친환경 공법으로 완벽한 공간을 약속합니다.</p>
    <div className="flex justify-center gap-4">
      <button className="bg-[#7B39FD] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-purple-200">빠른 예약</button>
      <button className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold border border-gray-200">포트폴리오</button>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* 예약 안내 섹션 */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">2026년 2월 손없는 날</h2>
              <p className="text-[#7B39FD] font-bold mb-4 italic">6, 7, 16, 17, 25, 26일</p>
              <p className="text-gray-500 text-sm">인기 있는 날짜는 조기 마감될 수 있으니 서두르세요!</p>
            </div>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
              <Phone size={20} /> 실시간 문의하기
            </button>
          </div>
        </section>
      </main>
      
      {/* 플로팅 통화 버튼 */}
      <div className="md:hidden fixed bottom-8 right-8 z-40">
        <a href="tel:0504-763-6545" className="w-16 h-16 bg-[#7B39FD] rounded-2xl flex items-center justify-center text-white shadow-2xl animate-bounce">
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;
