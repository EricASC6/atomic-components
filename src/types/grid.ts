export interface Grid {
  gridTemplateColumns: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows: React.CSSProperties["gridTemplateRows"];
  gridColumnStart: React.CSSProperties["gridColumnStart"];
  gridColumnEnd: React.CSSProperties["gridColumnEnd"];
  gridRowStart: React.CSSProperties["gridRowStart"];
  gridRowEnd: React.CSSProperties["gridRowEnd"];
  gridColumn: React.CSSProperties["gridColumn"];
  gridRow: React.CSSProperties["gridRow"];
  columnGap: React.CSSProperties["columnGap"];
  rowGap: React.CSSProperties["rowGap"];
  gap: React.CSSProperties["gap"];
}
