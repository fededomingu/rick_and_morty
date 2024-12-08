export interface ObjetAPI{
    info: info,
    results: character[],
  }
  export interface info{
    count: number,
    pages: number,
    next: string,
    prev: string,
  }

  interface objet{
    name: string,
    url: string,
  }
  export interface character{
      id: number,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      origin: objet,
      location: objet,
      image: string,
      episode: [],
      url: string,
      created: string,
    }


  export interface location{
      id: number,
      name: string,
      type: string,
      dimension: string,
      residents: [string],
      url: string,
      created: string,
      }
  
  export interface episode{
      id: number,
      name: string,
      air_date: string,
      episode: string,
      characters: [string],
      url: string,
      created: string,
      }   