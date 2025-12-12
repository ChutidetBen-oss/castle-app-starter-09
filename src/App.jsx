import { useContext } from "react";
import Castle from "./compomnents/01_Castle";
import { MassageContext } from "./context/MassageContext";

// state variable vs standard JS variable (var, let, const)
// In React we can use useState (a React Hook or built-in function/method) to create a state variable
export default function App() {
  const {question, answer, handleQuestion} = useContext(MassageContext)

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
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
      <Castle question={question} answer={answer}  />
    </div>
  );
}