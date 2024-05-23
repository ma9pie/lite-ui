import { ReactNode } from 'react';

export interface DocsListItem {
  key: string;
  label: string;
  createdAt: string;
}
export interface ExampleListItem {
  title?: string;
  component: ExampleComponent;
}
export interface ExampleComponent {
  (): JSX.Element;
  code: string;
}
export interface ComponentAPI {
  componentName: string;
  propsData: ComponentPropsData[];
}
export interface ComponentPropsData {
  property: string;
  type: string[];
  defaultValue?: any;
  description?: ReactNode;
}
export interface ComponentPropsType {
  type: string;
  code: string;
}
