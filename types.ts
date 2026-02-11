import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan: string; // Tailwind class for grid span
}

export interface NavLink {
  label: string;
  href: string;
}