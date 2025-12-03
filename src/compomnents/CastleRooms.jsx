import { useState } from "react";
import Castle from "./01_Castle"

export default function CastleRooms() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");


    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };
    const handAnswer = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-600 text-white w-full">
            <h1>Learn React with Castle Rooms</h1>
            <p className="text-purple-300">Message for the Secret Room ✉️ 🥷</p>
            <textarea
                name=""
                id=""
                value={question}
                onChange={handleQuestion}
                className="tetx-blck px-2 py-1 bg-white text-black">
            </textarea>
            <p className="text-yellow-300">
                {question ? `✅ ${question}` : "⌛️ waiting for the a message..."}
            </p>
            <p className="text-green-300">Reply from the Secret Room:</p>
            <p className="text-yellow-300">{answer ? answer : `Waiting for a reply...`}</p>
            <Castle question={question} answer={answer} handAnswer={handAnswer} />
        </div>
    );
}
