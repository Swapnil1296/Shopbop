import {Link} from "react-router-dom";

export const Navbar = () => {
  const nav = [
    {title: "Home", to: "/"},
    {title: "WhatsNew", to: "/what'snew"},
    {title: "OurFavorite", to: "/ourfavorite"},
  ];
  return (
    <div>
      {/* <Link to="/"> Home</Link>
        <Link to="/about"> About</Link> */}

      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{margin: "5px"}}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
