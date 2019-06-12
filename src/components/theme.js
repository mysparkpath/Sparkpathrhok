const colors = {
  white: '#fff',
  purple: '#793fa0',
  lightPurple: '#a66bcd',
  midPurple: '#8444ae',
  darkPurple: '#561281',
  darkGrey: '#525356',
}

const breakpoints = [600, 900, 1200, 1800].map(n => `${n}px`)

const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 128].map(
  n => `${n / 10}rem`
)

export const theme = {
  colors,
  breakpoints,
  space,
  links: {
    pill: {
      borderRadius: '50px',
    },
  },
}
