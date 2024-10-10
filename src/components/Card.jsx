import response from "../utils/data.json";

export const Card = () => {
  console.log(response.tasks);
  return (
    <div className="border-2">
      {response?.tasks?.map((data, index) => (
        <div className="flex border bg-slate-200 justify-between p-2">
          <div>
            <div>Title: {data.title}</div>
            <div>Description:{data.description}</div>
          </div>
          <div>
            <button className="bg-green-600 px-2 rounded-lg text-white mr-2">
              Done
            </button>
            <button className="bg-red-600 px-2 rounded-lg text-white">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
