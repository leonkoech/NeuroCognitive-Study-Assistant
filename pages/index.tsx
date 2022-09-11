import type { NextPage } from "next";
import style from "../components/styles/main.module.scss";

const Home: NextPage = () => {
  return (
    <div className={style.center}>
      <h1 className={style.header_text}>Focus Buddy</h1>
      <p className={style.label  +" "+ style.half_width}>
          Focus Buddy is an app that helps track your focus activity through study sessions
         <i>. It uses <a href="neuos.io">neuos</a>  to achieve this by taking advantage of the Artificial intelligence offered by Arctop.
           Out of the three data points received, Focus Buddy takes advantage of the focus state. </i> 
          <i>Through a timed session, it is able to provide a graph and a brief summary of where focus dropped below a certain threshold. These areas of decreased focus have to be reiterated 
          by the user to efficiently make use of the study sessions. </i>

          <br></br><br></br>
          <i>Make studying efficient, less stressful and more specialized</i>
      </p>
      <br></br>
      <a href="./auth">
        <div className={style.button}>Try Focus Buddy</div>
      </a>
    </div>
  );
};

export default Home;
