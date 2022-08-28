export interface SiteConfig {
  home: string;
  sitemap: string[];
  active_theme: string;
  themes: Record<string, { [key: string]: string }>;
}
