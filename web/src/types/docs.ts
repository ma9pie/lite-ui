export interface DocsListItem {
  key: string;
  label: string;
  createdAt: string;
}
export interface ExampleListItem {
  title: string;
  component: ExampleComponent;
}
export interface ExampleComponent {
  (): JSX.Element;
  code: string;
}
export interface APITableRowItem {
  property: string;
  type?: string[];
  description?: string;
  defaultValue?: any;
}
