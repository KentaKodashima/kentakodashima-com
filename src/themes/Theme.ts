export type ThemeType = {
  colors: {
    base: string
    accent: string
    middle: string
    light: string
  },
  fontSize: {
    base: string
    body: string
    thumbnailTitle: string
    navMenu: string
    heroSubtitle: string
    sectionTitlle: string
    pageTitle: string
  },
  fontFamily: {
    default: string
    base: string
    bold: string
    extraBold: string
  },
}

export const Theme = {
  colors: {
    base: '#F9F9F9',
    accent: '#1F1F1F',
    middle: '#9F9F9F',
    light: '#D9D9D9',
  },
  fontSize: {
    base: '10px',
    body: '16px',
    thumbnailTitle: '2.4rem',
    thumbnailSubtitle: '2.1rem',
    navMenu: '4.8rem',
    heroSubtitle: '4.8rem',
    sectionTitle: '4.8rem',
    pageTitle: '7.2rem'
  },
  fontFamily: {
    default: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial" ,sans-serif',
    base: '"Muli-Regular", sans-serif',
    bold: '"Muli-Bold", sans-serif',
    extraBold: '"Muli-ExtraBold", sans-serif',
  },
}
