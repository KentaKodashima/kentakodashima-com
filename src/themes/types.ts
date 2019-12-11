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