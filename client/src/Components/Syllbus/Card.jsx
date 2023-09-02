/** @format */

// Card.js
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, title, content, linkText, linkUrl } = props;

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 md:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-gray-800 dark:text-gray-400">
            <span className="bg-purple-100 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              {content}
            </span>
          </p>
          <Link
            className="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
            to={`/Syllbus/${id}`}
          >
            {linkText}
            <svg
              className="w-2.5 h-auto"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
