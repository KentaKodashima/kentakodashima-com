export type ProjectType = {
  title: string
  categoryType: string
  thumbnail: {
    id: string
    childImageSharp: {
      fluid: any
    }
  }
  thumbnailSubtitle: string
  mainImages: [{
    id: string
    childImageSharp: {
      fluid: any
    }
  }]
  appLinks: {
    appLink: {
      linkType: string
      url: string
    }
  }
  githubLink: string
  about: string
  technologies: string[]
  extraImages?: [{
    id: string
    childImageSharp: {
      fluid: any
    }
  }]
}

export type LocationType = {
  ancestorOrigins: Object
  assign: Function
  hash: string
  host: string
  hostname: string
  href: string
  key: string
  origin: string
  pathname: string
  port: string
  protocol: string
  reload: Function
  replace: Function
  search: string
  state: Object
  toString: Function
}

export type PageTransitionContextType = {
  location: LocationType
  direction: string
  provideDirection: (direction: string) => {}
}