import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../../types/technology";

function ShowStack({
  stack,
  setStack,
}: {
  stack: Technology[];
  setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}) {
  const handleRemoveFromStack = (techId: string) => {
    const updatedStack = stack.filter((tech) => tech.id !== techId);
    setStack(updatedStack);
  };
  return (
    <aside
      className="
          min-w-0 w-full
          rounded-2xl
          border border-gray-200
          bg-white p-5
          lg:sticky lg:top-6
          lg:self-start
        "
    >
      <h2 className="text-xl font-bold text-gray-900 -mb-3">Your Stack</h2>

      {stack.length > 0 ? (
        <div className="mt-4 flex flex-col gap-5 ">
          <span className="text-[11px] text-gray-400  ">
            {stack.length} Technologies selected
          </span>
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between ">
              <div className="flex items-center gap-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-7 w-7 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {tech.name}
                  </span>
                  <span className="text-[10px]  text-gray-400">
                    {tech.category}
                  </span>
                </div>
              </div>

              <button onClick={() => handleRemoveFromStack(tech.id)}>
                <RxCross2 className="text-2xl text-red-500 " />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setStack([])}
            className="w-full rounded-lg border border-red-600 text-red-600 px-4 py-2 text-sm font-medium  hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
          >
            Remove All
          </button>
        </div>
      ) : (
        <div>
          <p className="mt-4  text-[12px] text-gray-400">
            No technologies selected yet.
          </p>

          <div
            className="
            mt-4 flex min-h-[60px] w-full
            items-center justify-center
            rounded-xl
            border border-dashed border-gray-200
            px-4 py-3
          "
          >
            <span className="text-center text-xs text-gray-400">
              Your stack is empty.
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}

export default ShowStack;
