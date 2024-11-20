export interface FilterOption {
  name: string;
  value: string;
}

export interface FilterConfig {
  label: string;
  name: string;
  type: string;
  options?: FilterOption[];
}
