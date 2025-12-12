import { useContext } from "react";
import { MassageContext } from "../context/MassageContext";

export default function SecretRoom() {
    const {question, answer , handAnswer}= useContext(MassageContext);
    return (
        <div className=" w-[90%] flex flex-col justify-center items-center pt-10 bg-stone-500 ">
            <h1>Secret Room</h1>
            <p>🗝️ This is the final room.</p>
            <p>Message from the outside:</p>
            <p className="text-yellow-300 p-2">{question ? `${question}` : "Waiting message..."}</p>
            <p>Reply to the ourside</p>
            <textarea name="" id=""
                value={answer}
                onChange={handAnswer}
                className="w-[150px] bg-white text-black rounded px-2 py-1"></textarea>
            <p className="text-yellow-400">{answer ? `✅ ${answer}`: "Waiting for the reply..."}</p>
        </div>
    );
}