import NoResults from "../assets/no-results.png";

export default function NoFoundData() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="text-center">
        <img src={NoResults} alt="NoResults" className="w-28 h-28 mx-auto" />

        <div className="mt-4 font-semibold text-gray-700">No data found</div>
      </div>
    </div>
  );
}
