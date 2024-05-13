import { CountryType } from "@/types";
import Link from "next/link";

export default function Country(props: CountryType): React.ReactNode {
  return (
    <div key={props.id.toString()} id={props.id.toString()}>
      <h3>{props.name}</h3>
      <p>{props.emoji}</p>
      <p>{props.continent?.name}</p>
      {props.link ? (
        <button className="btn_details">
          <Link
            href={props.link ? props.link : ""}
            className="btn_details_text"
          >
            Details
          </Link>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
