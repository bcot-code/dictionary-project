import React from "react";

export default function NavBar() {
  return (
    <ul className="nav position-absolute top-0 end-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#top">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#top">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#top">
          Link
        </a>
      </li>
    </ul>
  );
}
