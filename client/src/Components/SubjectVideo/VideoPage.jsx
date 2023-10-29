import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import VideoData from "./VideoData.json";
import BackToTopButton from "../BackToTopButton";

const VideoPage = () => {
  const { token } = useContext(AuthContext);
  console.log("GLobal token", token);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const [subjects, setSubjects] = useState([]);

  const filteredSubjects = subjects.filter((subject) =>
    subject.subjectName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchSubjects();
  }, [token]);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/subject/allsubjects`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 px-10 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Subject Video Resources
      </h1>
      <div className="mb-4 ml-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 px-3 py-2 pl-8 rounded"
          />
          <span className="absolute top-3 left-2">
            <img
              src="search.png"
              alt="Search Icon"
              className="w-4 h-4 text-gray-500"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full">
        {Object.keys(VideoData).map((subjectName) => (
          <div
            key={subjectName}
            className="border-0 border-white cursor-pointer p-4 rounded text-white mx-auto "
          >
            <div className="my-2">
              <h2 className="text-lg font-bold">{subjectName}</h2>
              <p className="text-gray-500">
                {VideoData[subjectName]["Subject Code"]}
              </p>
            </div>
            <div className="bg-slate-700 border-0  rounded-xl flex flex-wrap">
              {VideoData[subjectName]["links"].map((link, index) => (
                <div className="m-6" key={index}>
                  <iframe
                    className="transition duration-200 hover:scale-105"
                    width="360"
                    height="215"
                    src={link.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* {VideoData.map((subject) => (
          <div
            key={subject.subjectCode}
            className="border-0 border-white cursor-pointer p-4 rounded text-white mx-auto "
          >
            <div className="my-2">
            <h2 className="text-lg font-bold">{subject.subjectName}</h2>
            <p className="text-gray-500">{subject.subjectCode}</p>

            </div>
            <div className="bg-slate-700 border-0  rounded-xl flex flex-wrap">
                <div className="m-4">
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/6mbwJ2xhgzM?si=WvHchBlpuQzOCnYY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="m-4">
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/qz0aGYrrlhU?si=_M1lRUWKSiY9WQyJ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div className="m-4">
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/HcOc7P5BMi4?si=jhbW-Litu5adZb0o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
            </div>
          </div>
        ))} */}
      </div>
      <BackToTopButton />
    </div>
  );
};

export default VideoPage;
