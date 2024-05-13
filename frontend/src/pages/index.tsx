import AddCountry from "@/components/addCountry";
import Country from "@/components/Country";
import Header from "@/components/Header";
import { allCountries } from "@/graphql/client";
import { CountryType } from "@/types";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, error, loading } = useQuery<{ items: CountryType[] }>(
    allCountries
  );
  const countries = data ? data.items : [];
  return (
    <>
      <Header></Header>
      <main>
        <AddCountry></AddCountry>
        <div className="countries_container">
          {countries.map((item: CountryType) => (
            <Country
              key={item.id}
              id={item.id}
              name={item.name}
              emoji={item.emoji}
              code={item.code}
              continent={{
                id: item.continent.id,
                name: item.continent.name,
              }}
              link={`country/${item.code}`}
            ></Country>
          ))}
        </div>
      </main>
    </>
  );
}
