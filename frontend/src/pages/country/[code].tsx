import AddCountry from "@/components/addCountry";
import Country from "@/components/Country";
import Header from "@/components/Header";
import { allCountries, oneCountry } from "@/graphql/client";
import { CountryType } from "@/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const countryCode = router.query.code;
  const { data, error, loading } = useQuery<{ item: CountryType }>(oneCountry, {
    variables: {
      code: countryCode,
    },
  });
  const country = data ? data.item : null;
  return (
    <>
      <Header></Header>
      <main>
        <div className="countries_container">
          {country ? (
            <>
              <Country
                key={country.id}
                id={country.id}
                name={country.name}
                emoji={country.emoji}
                code={country.code}
                continent={
                  country?.continent?.id
                    ? {
                        id: country.continent.id,
                        name: country.continent.name,
                      }
                    : null
                }
                link={null}
              ></Country>
            </>
          ) : (
            "Chargement/erreur"
          )}
        </div>
      </main>
    </>
  );
}
