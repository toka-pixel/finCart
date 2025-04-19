import Error from "../assets/computer.png";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    
  const navigate = useNavigate();
  const handleTryAgain = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">
      <div className="text-center space-y-4">
        <img src={Error} alt="error" className="w-28 h-28 mx-auto" />
        <div className="text-xl font-semibold text-gray-700">
          Something Went Wrong
        </div>
        <button
          className="px-4 py-2 border text-red-500 border-red-500 rounded-lg  transition"
          onClick={handleTryAgain}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
