export interface SidebarSubItem {
  name: string;
  path: string;
  new?: boolean;
  pro?: boolean;
}

export interface SidebarItem {
  icon: string | object;
  name: string;
  path?: string;
  subItems?: SidebarSubItem[];
}

export interface SidebarMenuGroup {
  title: string;
  items: SidebarItem[];
}
