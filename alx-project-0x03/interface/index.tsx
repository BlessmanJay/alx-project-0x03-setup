export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {
  path?: string;
}
