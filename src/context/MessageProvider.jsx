import { MassageContext } from "./MassageContext";
import { useState } from "react";

export default function MassageProvider({ children }) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };
    const handAnswer = (e) => {
        setAnswer(e.target.value);
    };


    return <MassageContext.Provider
        value={{question, answer, handAnswer, handleQuestion}}
    >
        {children}
    </MassageContext.Provider>;
}