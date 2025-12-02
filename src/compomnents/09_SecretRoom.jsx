export default function SecretRoom({question}) {
    return (
        <div className=" w-[90%] flex flex-col justify-center items-center pt-10 bg-stone-500 w-full">
            <h1>Secret Room</h1>
            <p>🗝️ This is the final room.</p>
            <p>Message from the outside:</p>
            <p>{question}</p>
        </div>
    );
}