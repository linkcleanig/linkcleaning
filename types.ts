
export enum MajorCategory {
  LUCKY_DAYS = '손없는 날',
  PROFESSIONAL = '전문청소',
  SPECIAL = '특수청소',
  APPLIANCE = '가전청소',
  PREVENTIVE = '예방시공'
}

export type ServiceCategory = 
  | '26년 2월' | '26년 3월' | '26년 4월' | '26년 5월' | '26년 6월' | '26년 7월'
  | '입주청소' | '이사청소' | '인테리어청소' | '거주청소' | '외벽&외창청소'
  | '준공청소' | '화재청소' | '쓰레기집청소' | '유품&고독사청소' | '폐기물처리'
  | '에어컨청소' | '냉장고청소' | '쇼파&매트리스' | '후드청소'
  | '줄눈시공' | '새집증후군시공' | '바닥왁스' | '방역&해충소독';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  majorCategory: MajorCategory;
  beforeImg: string;
  afterImg: string;
  description: string;
  date: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  majorCategory: MajorCategory;
  subCategories: ServiceCategory[];
}

export interface SiteSettings {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  phone: string;
  address: string;
  kakaoLink: string;
  naverTalkLink: string;
  instagramLink: string;
  primaryColor: string;
  accentColor: string;
  logoUrl: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  message: string;
  date: string;
  status: 'pending' | 'completed';
}
