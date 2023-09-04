/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const RepoInfo = () => {
  const [commitInfo, setCommitInfo] = useState({
    author: "",
    date: "",
  });

  useEffect(() => {
    const fetchCommitInfo = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/arnob016/PPF/branches/main"
        );

        if (response.ok) {
          const json = await response.json();
          const author = json.commit.author.login;
          const utcDate = json.commit.commit.author.date;
          const date = new Date(utcDate).toLocaleString(); // Convert to local time
          setCommitInfo({
            author,
            date,
          });
        } else {
          console.error("Failed to fetch commit information.");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchCommitInfo();
  }, []);

  return (
    <div className=" p-2 text-xs lg:text-md xl:text-lg hover:px-5 m-2 overflow-hidden justify-center text-black font-extrabold rounded-md bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
      <div className="flex-none md:flex"> Last updated by <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">&nbsp;{commitInfo.author}&nbsp;</span> on <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900">&nbsp;{commitInfo.date}&nbsp;</span></div>
    </div>
  );
};

export default RepoInfo;
