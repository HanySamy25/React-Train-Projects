import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Blog-Nav">
      <form className="Blog-searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="Blog-ul">
        <li>
          <Link as={Link} to="/dave-apps/blog/">
            Home
          </Link>
        </li>
        <li>
          <Link as={Link} to="/dave-apps/blog/post">
            Post
          </Link>
        </li>

        <li>
          <Link as={Link} to="/dave-apps/blog/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
