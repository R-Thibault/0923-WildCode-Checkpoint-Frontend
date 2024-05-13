// TODO
export type CountryType = {
  id: number;
  code: number;
  name: string;
  emoji: string;
  continent: ContinentType;
  link: string | null;
};

export type ContinentType = {
  id: number;
  name: string;
};
