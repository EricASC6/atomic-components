type CSSValue = string | number;

interface CSSRuleArgs {
  prop: string;
  value: CSSValue;
}

export default class ECSSRule {
  readonly prop: string;
  readonly value: CSSValue;

  constructor({ prop, value }: CSSRuleArgs) {
    this.prop = prop;
    this.value = value;
  }

  toString() {
    const { prop, value } = this;
    return `${prop}: ${value};`;
  }
}
