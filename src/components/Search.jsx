import React, { useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import "../assets/search.css";

import Board from "./Board";
import { useBadge } from "../context/BadgeContext";

const Search = () => {
  const [tags, setTags] = useState([]);
  const { badge } = useBadge();

  useEffect(() => {
    setTags((prev) => [...prev, ...badge]);
  }, [badge]);

  const handleChange = (tags) => {
    setTags(tags);
  };

  return (
    <>
      <div className="w-100 relative">
        <TagsInput
          value={tags}
          onChange={handleChange}
          inputProps={{
            placeholder: "Add filters",
          }}
        />
        <button className="clear-btn" onClick={() => setTags([])}>
          Clear
        </button>
      </div>
      <Board tags={tags} />
    </>
  );
};

export default Search;
