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
  gridAutoFlow: React.CSSProperties["gridAutoFlow"];
  gridAutoColumns: React.CSSProperties["gridAutoColumns"];
  gridAutoRows: React.CSSProperties["gridAutoRows"];
  gridTemplateAreas: React.CSSProperties["gridTemplateAreas"];
  gridArea: React.CSSProperties["gridArea"];
}
