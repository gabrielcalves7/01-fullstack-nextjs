import { Breakpoints } from '@skynexui/responsive_stylesheet'

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;


export interface StyleSheet {
  fontFamily?: string | ResponsiveProperty<string>;
  backgroundColor?: string | ResponsiveProperty<string>;
  [key: string]: any;

}
