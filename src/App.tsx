import ButtonCus from "./components/ButtonCus";
import "./style.css";
import handsPic from "./assets/handsholding.png"
import Row from "./components/Row";
import Col from "./components/Col";
import {ToastContainer} from "react-toastify";

export default function App() {
    return (
        <div className="center">
            <Col style={{alignItems: "center"}}>
                <img src={handsPic} alt="handsHold"/>
                <Row style={{padding: "5px"}}>
                    <ButtonCus text={"Yes"}/>
                    <ButtonCus text={"No"}/>
                </Row>
            </Col>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}