export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  period: string;
}

export interface MethodologyCard {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  modality: 'presential' | 'online';
  serviceNeed: 'tcc' | 'dbt' | 'supervisao' | 'not_sure';
  message: string;
}
