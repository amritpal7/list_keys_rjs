const Header = ({ title = "Unknown List 123" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
// Header.defaultProps = {
//   title: "Unknown List",
// };

export default Header;
