module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-rational-order', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-a11y', 'stylelint-declaration-strict-value', 'stylelint-color-format','stylelint-no-unsupported-browser-features'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'property-no-unknown': [true, { ignoreAtRules: ['supports'] }],

    'scss/selector-no-redundant-nesting-selector': true,

    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,

    'color-format/format': {
      format: 'rgb',
    },

    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning",
      "ignore": ["css-clip-path", "css-masks"],
    }]
  },
};
