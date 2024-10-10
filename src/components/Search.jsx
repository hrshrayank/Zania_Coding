export const Search = () => {
  return (
    <div className="flex gap-2 justify-center my-3">
      <button className="bg-gray-200 px-2">Add Task</button>

      <input placeholder="Search By Category" className="border-2 p-2" />

      <button className="bg-blue-600 px-3 rounded-lg">Search</button>

      <button className="bg-red-400 px-2 rounded-lg">Cancel</button>
    </div>
  );
};
