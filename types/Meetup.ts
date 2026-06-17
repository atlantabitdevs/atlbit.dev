export interface Meetup {
  description: string
  city: {
    name: string
    position: string
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
