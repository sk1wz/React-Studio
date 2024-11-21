export interface IAdvantageItem {
    id: number;
    title: string;
    body: string;
    img: any;
}

export interface IStageItem {
    id: number;
    heading: string;
    description: string;
    icon: any;
}

export interface FrontendItem {
  id: number;
  title: string;
  body: string;
  price: number;
  link: string;
  icon: any;
}

export interface BackendItem {
    id: number;
    title: string;
    body: string;
    price: number;
    link: string;
    icon: any;
  }

export interface IServiceItem {
    frontend: FrontendItem[];
}
  
