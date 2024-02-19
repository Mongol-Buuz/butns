import { useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
    text: string;
    size?: string;
}

export default function ButtonCus(props: Props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(props.text);
    const [width, setWidth] = useState("");

    const handleClick = () => {
        if (props.text === "Yes") {
            toast.success("Lessgo", { position: "top-right" });
            return;
        }
        setCount(count + 1);
        if (count === 1) {
            setText("Why not?");
            setWidth("50px");
        }
        if (count === 2) {
            setText("Cmon lets date");
            setWidth("100px");
        }
        if (count === 3) {
            setText("Well fuck you then");
            setWidth("150px");
        }
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClick} style={{ width: width }}>
            {text}
        </Button>
    );
}
