export type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export type HeldItem = {
  item: {
    name: string
    url: string
  }
  version_details: VersionDetail[]
}

export type VersionDetail = {
  rarity: number
  version: {
    name: string
    url: string
  }
}
