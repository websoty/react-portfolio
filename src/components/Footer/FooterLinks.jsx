import { Link } from "react-scroll";

const FooterLinks = ({ title, links, social }) => {
  return (
    <div className={social ? "follow__group" : "info__group"}>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {social ? 
            (
              <a href={link.href} target="_blank">
                <link.icon />
              </a>
            ) : 
            (
              <Link to={link.href} smooth={true} duration={200}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {/* <div className="follow__group">
        <ul>
          <li>
            <a href="#" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default FooterLinks;
