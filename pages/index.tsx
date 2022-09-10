import type { NextPage } from "next";
import Button from "../components/Button/Button";

const Home: NextPage = () => {
  return (
    <div>
      <a href="./home">
        <Button text="Login Page" type="dark"></Button>
      </a>
    </div>
  );
};

export default Home;
