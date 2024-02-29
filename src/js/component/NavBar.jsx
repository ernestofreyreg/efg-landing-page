import React from "react";

export function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Logo />
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <a className="navbar-brand" href="#">
      Bootstrap
    </a>
  );
}
