import { useState } from "react";
import CastleRooms from "./compomnents/CastleRooms";
import ViewToggleButton from "./compomnents/ViewTolggleBotton";
import Castle from "./compomnents/01_Castle";
import YouTubePlayer from "./compomnents/YoutubePlayer"
// state variable vs standard JS variable (var, let, const)
// In React we can use useState (a React Hook or built-in function/method) to create a state variable
export default function App() {
  const [view, setView] = useState("");

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="flex gap-4 m-8">
        <ViewToggleButton
          onClick={()=>{setView("castle");
          }}
        >
          Castle Rooms
        </ViewToggleButton>
        <ViewToggleButton
          onClick={()=>{setView("video");
          }}
        >
          Youtube Video
        </ViewToggleButton>
      </div>
      {view==="castle" && <CastleRooms />}
      {view==="video" && <YouTubePlayer />}
    </div>
  );
}