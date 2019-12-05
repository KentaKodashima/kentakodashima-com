export type ProjectType = {
  title: string
  category_type: string
  thumbnail: {
    id: string
    childImageSharp: {
      fluid: any
    }
  }
  thumbnail_subtitle: string
  main_images: []
  app_links: {
    app_link: {
      link_type: string
      url: string
    }
  }
  github_link: string
  about: string
  technologies: string
  extra_images?: []
}