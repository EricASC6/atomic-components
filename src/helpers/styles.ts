export const getProvidedStyles = (styles: Object) => {
  const providedStyles = Object.entries(styles).filter(
    ([_, value]) => value !== null && value !== undefined
  );

  return providedStyles;
};
