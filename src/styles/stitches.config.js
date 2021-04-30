import { createCss } from '@stitches/core'

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      background: '#fff',
      altBackground: '#f4f4f4',
      text: '#121212',
      accent: '#0000ff',
      divider: '#eaeaea',
    },
    space: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {},
});
