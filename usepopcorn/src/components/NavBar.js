import { useState } from "react";

export function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
export function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
