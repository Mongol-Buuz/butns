import happyCat from "../assets/happycat.gif"
import "../style.css"
import Col from "./Col.tsx";
export default function Congrats() {
    return <div className="center">
            <Col style={{alignItems:"center"}}>
            <img src={happyCat} alt="Congratulations GIF" />
            <p>Congrats now we go on a date</p>
            </Col>
        </div>
}