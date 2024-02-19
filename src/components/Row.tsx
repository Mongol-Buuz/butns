import css from "./LayoutCSS.module.css";
import React, {forwardRef, MouseEventHandler} from "react";

export interface LayoutProps {
    children?: React.ReactNode;
    gap?: number;
    style?: React.CSSProperties;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

// Define the type for the forwarded ref
type RowRef = HTMLDivElement;

const Row = forwardRef<RowRef, LayoutProps>((props, ref) => {
    const gap = props.gap ? {gap: props.gap + "px"} : undefined;
    return (
        <div
            {...props}
            ref={ref}
            className={`${css.row}${props.className ? " " + props.className : ""}`}
            style={{...(gap ? gap : {}), ...props.style}}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
});

export default Row;