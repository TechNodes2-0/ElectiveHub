/** @format */

const LargeModal = ({ nodeDatum, handleButtonClick, children }) => {
  return (
    <div
      id="large-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100%]"
      style={{ userSelect: "text" }} // Add user-select style here
    >
      <div
        className="relative w-full max-w-7xl max-h-full"
        style={{ userSelect: "text" }}
      >
        {" "}
        {/* Add user-select style here */}
        <div
          className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700"
          style={{ userSelect: "text" }}
        >
          {" "}
          {/* Add user-select style here */}
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              {nodeDatum.name}
            </h2>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="large-modal"
              onClick={handleButtonClick}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">{children}</div>
          {/* More modal content */}
        </div>
      </div>
    </div>
  );
};

export default LargeModal;
