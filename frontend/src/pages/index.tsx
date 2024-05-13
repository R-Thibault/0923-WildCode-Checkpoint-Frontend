import Header from "@/components/Header";
import { allCountries } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import { ReactNode } from "react";

export default function Home() {
  const { data, error } = useQuery(allCountries);
  const countries = data ? data.items : [];
  console.log(countries);
  return (
    <>
      <Header></Header>
      <main></main>
    </>
  );
}
