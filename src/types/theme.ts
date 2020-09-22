export type Theme = {
  colors: {
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;
  };
} & { [prop: string]: any };

export type ColorTheme<T> = keyof Theme["colors"] | T;
