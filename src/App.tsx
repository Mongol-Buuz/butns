import ButtonCus from "./components/ButtonCus";
import "./style.css";
import handsPic from "./assets/handsholding.png";
import Row from "./components/Row";
import Col from "./components/Col";
import { toast, ToastContainer } from "react-toastify";
import {Button} from "@mui/material";
import { useState } from "react";
import Congrats from "./components/Congrats.tsx";
import Modal from "react-modal";

export default function App() {
    const defaultButtonPosition = { top: 5, left: 70 };
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
        toast.success("Happy Happy Happy", { position: "top-right" });
        toast.success("Happy Happy Happy", { position: "top-right" });
        toast.success("Happy Happy Happy", { position: "top-left" });
        toast.success("Happy Happy Happy", { position: "top-left" });
        toast.success("Happy Happy Happy", { position: "bottom-left" });
        toast.success("Happy Happy Happy", { position: "bottom-left" });
        toast.success("Happy Happy Happy", { position: "bottom-right" });
        toast.success("Happy Happy Happy", { position: "bottom-right" });
        toast.success("Happy Happy Happy", { position: "bottom-center" });
        toast.success("Happy Happy Happy", { position: "top-center" });
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Col style={{ alignItems: "center" }}>
                <p>Lets go on a date</p>
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
