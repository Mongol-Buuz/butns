// ButtonCus.tsx
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

interface Props {
    text: string;
    defaultPosition: { top: number; left: number };
    onCount17: () => void;
}

export default function ButtonCus(props: Props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(props.text);
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [position, setPosition] = useState<{ top: number; left: number }>(props.defaultPosition);

    useEffect(() => {
        if (count > 5 && count <= 16) {
            setPosition({ top: getRandomPosition(), left: getRandomPosition() });
        }
        if (count === 17){
            setPosition({top: 5, left: 70})
        }
        if (count === 18){
            props.onCount17()
        }

    }, [count]);

    const getRandomPosition = () => Math.random() * 300;

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
        if (count === 1) {
            setText("Why not?");
            setWidth("50px");
            setHeight("50px");
        } else if (count === 2) {
            setText("Cmon lets date");
            setWidth("100px");
            setHeight("100px");
        } else if (count === 3) {
            setText("Think about this more");
            setWidth("150px");
            setHeight("150px");
        } else if (count === 4) {
            setText("Well, you wanted this");
            setWidth("150px");
            setHeight("150px");
        } else if (count === 5) {
            setText("No!");
            setWidth("50px");
            setHeight("50px");
        } else if (count === 11) {
            setText("Cmon");
        } else if (count === 12) {
            setText("Think");
        } else if (count === 13) {
            setText("About");
        } else if (count === 14) {
            setText("This");
        } else if (count === 15) {
            setText("Really");
        } else if (count === 16) {
            setText("!No");
        }

    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            style={{ width: width, height: height, top: position.top, left: position.left, position: "absolute" }}
        >
            {text}
        </Button>
    );
}
