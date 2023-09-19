export interface IContent {
  home: IHome | null;
  about: IAbout | null;
  visa: IVisa | null;
  allTours: IAllTours | null;
  faqs: IFaqs | null;
}

export interface IAbout {
  content: string;
  seoTitle: string;
  seoDescription: string;
  seoTags: string;
}

export interface IAllTours {
  seoTitle: string;
  seoDescription: string;
  seoTags: string;
}

export interface IVisa {
  content: string;
  seoTitle: string;
  seoDescription: string;
  seoTags: string;
}

export interface IHome {
  content: string;
  trendingTours: number[];

  seoTitle: string;
  seoDescription: string;
  seoTags: string;
}

export interface IFaqs {
  qas: QA[];
}

export type QA = {
  question: string;
  answer: string;
};
