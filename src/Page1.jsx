import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/Page1/Page1DetailA">Page1DetailA</Link>
      <br />
      <Link to="/Page1/Page1DetailB">Page1DetailB</Link>
    </div>
  );
};
