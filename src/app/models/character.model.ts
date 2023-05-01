interface Location {
  name: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}
interface Episode {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Episode[];
  url: string;
  created: string;
}
