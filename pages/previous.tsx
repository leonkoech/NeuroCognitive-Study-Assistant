import style from "./previous.module.scss"
import ChartComponent from "../components/chart/Chart";
const previous = () =>{
return (
    <div>
    <ChartComponent name={'promodoro 1 session 1'} points={[10.0, 20.2, 39.1, 21.4, 19.9, 20.2, 39.8, 18.6, 49.6]}></ChartComponent>
    <div className={[style.previous].join(" ")}>
        <h1>Session Summary</h1>
        <p>
            Have you ever read a webpage or document that used this text without paying much attention to it? The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout of the text instead of its content. Many software programs and applications have made it their default dummy text. Since the lorem ipsum is always used as a placeholder text, its use indicates that this is not a final version of a document, thus helping to avoid unnecessary printing.
        </p>
    </div>
    </div>
);
}
export default previous;