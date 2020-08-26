export const getProvidedStyles = (styles: Object) => {
  const providedStyles = Object.entries(styles).filter(([_, value]) =>
    Boolean(value)
  );

  return providedStyles;
};
