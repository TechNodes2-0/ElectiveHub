/** @format */

import React, { useState } from "react";
import syllabusData from "./syllabusData.json"; // Import the JSON data

export default function Info({id}) {
  const [activeTab, setActiveTab] = useState("study-material");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  const selectedCard = syllabusData.find((card) => card.id === parseInt(id));

if (selectedCard) {
  console.log(selectedCard);
} else {
  console.log("Card not found");
}
  return (
    <div>
      <div className="border shadow-sm">
        <div className="flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
            <nav className="flex space-x-2" aria-label="Tabs">
              <a
                className={`-mb-px py-3 px-4 bg-white text-sm font-medium text-center border ${
                  activeTab === "study-material"
                    ? "border-b-transparent text-gray-700"
                    : "border-b-transparent text-gray-500"
                } rounded-t-lg hover:text-gray-700 focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-800 dark:hover:text-gray-400`}
                href="#"
                onClick={() => handleTabClick("study-material")}
              >
                Study Material of   {selectedCard.title}
              </a>

              <a
                className={`-mb-px py-3 px-4 text-sm font-medium text-center border ${
                  activeTab === "syllabus"
                    ? "border-b-transparent text-gray-700"
                    : "border-b-transparent text-gray-500"
                } rounded-t-lg hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-gray-400`}
                href="#"
                onClick={() => handleTabClick("syllabus")}
              >
                Syllabus  of   {selectedCard.title}
              </a>
            </nav>
          </div>
          <div className="p-4 text-left md:py-7 md:px-5">
            {/* Study Material section */}
            {activeTab === "study-material" && (
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Study Material 
                </h3>
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                    e-Notes
                  </h4>
                  <br />
                  <ul className="list-disc list-inside list-none">
                    {selectedCard.studyMaterial.map((item, index) => (
                      <li key={index} className="mb-6">
                        <a
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          href={item.link}
                          title={`Presentation 1 | ${item.unit}`}
                          target="_blank"
                        >
                          <b>{item.unit}</b> | {item.presentation}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "syllabus" && (
              <div className="text-left">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white ">
                  Syllabus
                </h2>
                <div className="mt-4">
                  <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                    Teaching Scheme (in Hours)
                  </h2>
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          Theory
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          Tutorial
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          Practical
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          30
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          15
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          20
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          65
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          35
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          20
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          25
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          80
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                    Examination Scheme (in Marks)
                  </h2>
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          Theory
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          ESE (E) Theory
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          PA (M) Practical
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          ESE Viva (V) Practical
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          PA (I)
                        </th>
                        <th className="px-2 py-1 text-gray-700 dark:text-gray-300">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          100
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          70
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          30
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          20
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          10
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          230
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          120
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          80
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          40
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          30
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          15
                        </td>
                        <td className="border px-2 py-1 text-gray-800 dark:text-gray-400">
                          285
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />

                  <div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white ">
                      Syllabus Content
                    </h2>
                    <br />
                    <div>
                      {selectedCard.syllabusContent.syllabusContent.map(
                        (content, index) => (
                          <div key={index}>
                            <h5 className="text-gray-800 dark:text-white font-sans">
                              {content.unit}
                            </h5>
                            <p className="mt-2 text-gray-800 dark:text-gray-400">
                              {content.content}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <br />

                <div className="text-white">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Reference Books
                  </h2>
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="p-2 border border-gray-300">Sr.</th>
                        <th className="p-2 border border-gray-300">Title</th>
                        <th className="p-2 border border-gray-300">Author</th>
                        <th className="p-2 border border-gray-300">
                          Publication
                        </th>
                        <th className="p-2 border border-gray-300">
                          Amazon Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCard.referenceBooks.map((book, index) => (
                        <tr key={index}>
                          <td className="p-2 border border-gray-300">
                            {book.sr}
                          </td>
                          <td className="p-2 border border-gray-300">
                            {book.title}
                          </td>
                          <td className="p-2 border border-gray-300">
                            {book.author}
                          </td>
                          <td className="p-2 border border-gray-300">
                            {book.publication}
                          </td>
                          <td className="p-2 border border-gray-300">
                            <a
                              href={book.amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Amazon Link
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
