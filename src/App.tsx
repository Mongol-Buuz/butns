import ButtonCus from "./components/ButtonCus";
import "./style.css";
import handsPic from "./assets/handsholding.png";
import Row from "./components/Row";
import Col from "./components/Col";
import { toast, ToastContainer } from "react-toastify";
import {Button, Typography} from "@mui/material";
import { useState } from "react";
import Congrats from "./components/Congrats.tsx";
import Modal from "react-modal";

export default function App() {
    const defaultButtonPosition = { top: 5, left: 70 };
    const [isModalOpen, setModalOpen] = useState(false);

    const happyStr:string = "Happy Happy Happy"

    const handleClick = () => {
        setModalOpen(true);
        toast.success( happyStr, { position: "top-right" });
        toast.success( happyStr, { position: "top-right" });
        toast.success( happyStr, { position: "top-left" });
        toast.success( happyStr, { position: "top-left" });
        toast.success( happyStr, { position: "bottom-left" });
        toast.success( happyStr, { position: "bottom-left" });
        toast.success( happyStr, { position: "bottom-right" });
        toast.success( happyStr, { position: "bottom-right" });
        toast.success( happyStr, { position: "bottom-center" });
        toast.success( happyStr, { position: "top-center" });
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Col style={{ alignItems: "center" }}>
                <Typography variant="caption"
                            style={{
                                textAlign: "center",
                                marginBottom: '10px',
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "black",
                                paddingBottom: '5px',
                                borderRadius: '25px', boxShadow: "0px 0px 30px rgba(99, 125, 170, 0.5)", padding: 15
                            }}>
                Lets go on a date?
                </Typography>
                <img src={handsPic} alt="handsHold" />
                <Row style={{ padding: "5px", position: "relative" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ width: "50px", height: "50px" }}
                        onClick={handleClick}
                    >
                        Yes
                    </Button>
                    <ButtonCus text={"No"} defaultPosition={defaultButtonPosition} onCount17={handleClick}/>
                </Row>
            </Col>
            <ToastContainer position="top-right" autoClose={3000}/>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Congrats Modal"
                ariaHideApp={false}
            >
                    <Congrats />
                    <Button variant="contained"
                            color="primary"
                            onClick={closeModal}>
                        much love
                    </Button>
            </Modal>
        </div>
    );
}
