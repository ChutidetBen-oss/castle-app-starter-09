import Room from "./04_Room";

export default function Chamber({question, answer, handAnswer}){
    return(
        <div className="flex flex-col justify-center items-center pt-10 bg-yellow-500 w-[90%]">
            <h1>Chamber</h1>
            <Room question = {question} answer={answer} handAnswer={handAnswer}/>
        </div>
    );
}