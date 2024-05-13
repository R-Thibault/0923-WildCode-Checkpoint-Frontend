// TODO
export type CountryType = {
  id: number;
  code: string;
  name: string;
  emoji: string;
  continent: ContinentType | null;
  link: string | null;
};

export type AddCountryForm = {
  code: string;
  name: string;
  emoji: string;
  continent: ContinentType | null;
};

export type ContinentType = {
  id: number;
  name: string;
};
