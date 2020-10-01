import { ColorTheme } from "./theme";

export interface Border {
  border: React.CSSProperties["border"];
  borderWidth: React.CSSProperties["borderWidth"];
  borderStyle: React.CSSProperties["borderStyle"];
  borderColor: ColorTheme<React.CSSProperties["borderColor"]>;
  borderRadius: React.CSSProperties["borderRadius"];
  borderTop: React.CSSProperties["borderTop"];
  borderRight: React.CSSProperties["borderRight"];
  borderBottom: React.CSSProperties["borderBottom"];
  borderLeft: React.CSSProperties["borderLeft"];
  borderTopWidth: React.CSSProperties["borderTopWidth"];
  borderTopStyle: React.CSSProperties["borderTopColor"];
  borderTopColor: ColorTheme<React.CSSProperties["borderTopColor"]>;
  borderRightWidth: React.CSSProperties["borderRightWidth"];
  borderRightStyle: React.CSSProperties["borderRightStyle"];
  borderRightColor: ColorTheme<React.CSSProperties["borderRightColor"]>;
  borderBottomWidth: React.CSSProperties["borderBottomWidth"];
  borderBottomStyle: React.CSSProperties["borderBottomStyle"];
  borderBottomColor: ColorTheme<React.CSSProperties["borderBottomColor"]>;
  borderLeftWidth: React.CSSProperties["borderLeftWidth"];
  borderLeftStyle: React.CSSProperties["borderLeftStyle"];
  borderLeftColor: ColorTheme<React.CSSProperties["borderLeftColor"]>;
  borderX: React.CSSProperties["border"];
  borderY: React.CSSProperties["border"];

  borderTopLeftRadius: React.CSSProperties["borderTopLeftRadius"];
  borderTopRightRadius: React.CSSProperties["borderTopRightRadius"];
  borderBottomLeftRadius: React.CSSProperties["borderBottomLeftRadius"];
  borderBottomRightRadius: React.CSSProperties["borderBottomRightRadius"];

  boxShadow: React.CSSProperties["boxShadow"];
  textShadow: React.CSSProperties["textShadow"];
}