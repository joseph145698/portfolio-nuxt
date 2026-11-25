import type { Component } from 'vue'

export type TechnologyCardItem =
  | {
      name: string
      icon: Component
      image?: never
      alt?: never
    }
  | {
      name: string
      image: string
      alt: string
      icon?: never
    }
