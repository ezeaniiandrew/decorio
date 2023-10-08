/* eslint-disable react/prop-types */

function NavLink({ className, children }) {
  return (
    <li className={className}>
      <a href="#">{children}</a>
    </li>
  );
}

export default NavLink;
