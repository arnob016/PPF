import React, { useEffect, useState } from "react";

const RepoInfo = () => {
  const [lastUpdated, setLastUpdated] = useState("");
  const desiredRepo = "arnob016/PPF";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${desiredRepo}?t=${Date.now()}`
        ); // Adding a timestamp query parameter

        if (response.ok) {
          const repoData = await response.json();
          const lastUpdatedDate = new Date(repoData.updated_at);
          const localDateString = lastUpdatedDate.toLocaleString();
          setLastUpdated(localDateString);
        } else {
          console.error("Failed to fetch data from GitHub API.");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 text-white bg-blue-500">
      <p className="text-lg font-bold">Repository Information</p>
      <p>
        Last updated: {lastUpdated}
      </p>
    </div>
  );
};

export default RepoInfo;
