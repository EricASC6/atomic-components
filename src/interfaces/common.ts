type CSSValue = string | number | undefined;
type Display = "static" | "flex" | "grid" | "inline" | undefined;

export interface Common {
  color?: CSSValue;
  display?: Display;

  // [x: string]: any;
}
