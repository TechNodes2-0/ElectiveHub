/** @format */

import React, { useEffect, useState } from "react";
import "./RichText.css"; // Import the CSS file for styling
import axios from "axios";
import {Triangle} from "react-loader-spinner"

const Home = ({ articleId }) => {
  const [article, setArticle] = useState();
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://hackbattle-react-vs-angular.onrender.com/api/article/${articleId}`
      )
      .then((response) => {
        setArticle(response.data.name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setLoading(false);
      });
  }, [articleId]);

  useEffect(() => {
    console.log(article);
    if (article) {
      // Fetch options for GitHub Markdown API
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: article,
          mode: "gfm", // Set the mode to GitHub Flavored Markdown
        }),
      };

      // Fetch the rendered HTML from GitHub Markdown API
      fetch("https://api.github.com/markdown", requestOptions)
        .then((response) => response.text())
        .then((data) => setHtmlContent(data))
        .catch((error) => console.error(error));
    }
  }, [article]);

  if (loading) {
    return <div className='w-full h-screen flex flex-row justify-center items-center'><Triangle height={'100'} width={'100'} color='#132043'/> </div>
  }

  return (
    <div className="github-readme">
      <div
        className="github-readme-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Home;
