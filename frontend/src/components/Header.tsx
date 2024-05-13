import Link from "next/link";

export default function Header(): React.ReactNode {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
