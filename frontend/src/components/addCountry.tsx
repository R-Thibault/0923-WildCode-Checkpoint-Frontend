import { addCountry, allContinents, allCountries } from "@/graphql/client";
import { AddCountryForm, ContinentType } from "@/types";
import { useMutation, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";

export default function AddCountry() {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [continentId, setContinentId] = useState<null | number>(null);

  const { data, error, loading } = useQuery<{ items: ContinentType[] }>(
    allContinents
  );
  const continents = data ? data.items : [];
  const [doCreate, { loading: loadingCreate }] = useMutation(addCountry, {
    refetchQueries: [allCountries],
  });
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: AddCountryForm = {
      name,
      emoji,
      code,
      continent: continentId ? { id: continentId } : null,
    };
    console.log(name, emoji, code, continentId);
    if (name && emoji && code) {
      const result = await doCreate({
        variables: {
          data: data,
        },
      });
    } else {
      console.error("error");
    }
  }
  return (
    <>
      <div className="form_styled_container">
        <form onSubmit={onSubmit} className="form_container">
          <div className="form_input">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form_input">
            <label>Emoji</label>
            <input
              type="text"
              placeholder="Emoji"
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
              required
            />
          </div>
          <div className="form_input">
            <label>Code</label>
            <input
              type="text"
              placeholder="Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="form_input">
            <label>Continent</label>
            <select
              name="continent"
              value={continentId + ""}
              onChange={(e) => setContinentId(Number(e.target.value))}
            >
              <option value={undefined}>-- Votre Choix --</option>
              {continents.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn_submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
