import * as React from "react";
import { render } from "react-dom";
import { Example } from "./Example";
import "./styles.css";


export default function MenuL(){
    return render(<Example />, document.getElementById("root"));

}
