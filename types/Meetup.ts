export interface Meetup {
  description: string
  city: {
    name: string
    position: string
  }
  colors: {
    primary: {
      hex: string
      rgb: string
    }
    secondary: {
      hex: string
      rgb: string
    }
    tertiary: {
      hex: string
      rgb: string
    }
  }
  mainNav: NavItemType[]
  image: string
  ai: AiType[]
}

type NavItemType = {
  text: string
  link: string
}

type AiType = {
  name: string
  system: string
  promptTemplate: string
}
