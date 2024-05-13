import { addCountry, allCountries } from "@/graphql/client";
import { AddCountryForm } from "@/types";
import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";

export default function AddCountry() {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [doCreate, { loading: loadingCreate }] = useMutation(addCountry, {
    refetchQueries: [allCountries],
  });
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: AddCountryForm = {
      name,
      emoji,
      code,
      continent: null,
    };
    console.log(name, emoji, code);
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
      <div>
        <form onSubmit={onSubmit} className="form_container">
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Emoji</label>
            <input
              type="text"
              placeholder="Emoji"
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Code</label>
            <input
              type="text"
              placeholder="Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
