import React, { useEffect, useState } from "react";
import { useBadge } from "../context/BadgeContext";
import data from "../assets/data.json";

function Board({ tags }) {
  const [filteredElements, setFilteredElements] = useState([]);
  const { badge, setBadge } = useBadge();

  useEffect(() => {
    const lowercasedTags = tags.map((tag) => tag.toLowerCase());
    const updatedFilteredElements = data.filter((element) => {
      const filterArray = [...element.languages, element.role, element.level];
      return (
        lowercasedTags.length === 0 ||
        filterArray.some((lang) =>
          lowercasedTags.some((tag) => lang.toLowerCase().includes(tag))
        )
      );
    });
    setFilteredElements(updatedFilteredElements);
  }, [tags]);

  return (
    <>
      {filteredElements.map((item) => (
        <div className="card-wrapper mt-5 relative" key={item.id}>
          <div className="company-logo">
            <img src={item.logo} alt="company logo" />
          </div>
          <div className="badge-wrapper">
            <div>
              <div className="company-text-top">
                <div className="company-name">{item.company}</div>
                {item.new ? (
                  <span className="company-badge__new">new</span>
                ) : null}
                {item.featured ? (
                  <span className="company-badge__featured">featured</span>
                ) : null}
              </div>

              <div className="position">{item.position}</div>
              <div className="d-flex">
                <div className="date">{item.postedAt}</div>
                <div className="contract">{item.contract}</div>
                <div className="location">{item.location}</div>
              </div>
            </div>
            <div className="languages">
              {[item.role, item.level, ...item.languages].map((text, index) => (
                <button key={index} onClick={() => setBadge(() => [text])}>
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Board;
