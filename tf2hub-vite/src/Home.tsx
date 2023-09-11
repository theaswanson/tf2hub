import { useState } from "react";
import { Tag } from "./models/Tag";
import "./Home.scss";

export class TagFilter {
  text?: string;
  value?: Tag;
}

function Home() {
  const tags = [
    { text: "All" } as TagFilter,
    { text: "Featured", value: Tag.Featured } as TagFilter,
    {
      text: "Official Sites",
      value: Tag.Official,
    } as TagFilter,
    {
      text: "Community Servers",
      value: Tag.CommunityServers,
    } as TagFilter,
    {
      text: "Communities",
      value: Tag.Communities,
    } as TagFilter,
    { text: "Events", value: Tag.Events } as TagFilter,
    {
      text: "Enhancements",
      value: Tag.Enhancements,
    } as TagFilter,
    { text: "Tools", value: Tag.Tools } as TagFilter,
    { text: "Mods", value: Tag.Mods } as TagFilter,
    {
      text: "Competitive",
      value: Tag.Competitive,
    } as TagFilter,
    { text: "Trading", value: Tag.Trading } as TagFilter,
    {
      text: "Marketplaces",
      value: Tag.Marketplaces,
    } as TagFilter,
  ];

  const [selectedTag, setSelectedTag] = useState(tags[0]);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="welcome">
        <div className="title">Welcome!</div>
        <div
          className="text"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            Here you can find all of the most popular TF2-related sites,
            including official sites, trading sites, community projects, and
            more.
          </div>
          <div>
            This site was created with the intent of helping newcomers to TF2
            find helpful resources all in one place.
          </div>
          <div>
            TF2 Hub is still in development, but if you find a problem or would
            like to request a feature, please visit our{" "}
            <a href="https://github.com/theaswanson/tf2hub" target="_blank">
              GitHub repo
            </a>
            .
          </div>
        </div>
      </div>
      <div className="filters" style={{ display: "flex", gap: "0 1rem" }}>
        {tags.map((tag, i) => (
          <div className="card" key={i} onClick={() => setSelectedTag(tag)}>
            <div
              className={`card-content ${
                tag.text === selectedTag.text ? "selected" : ""
              }`}
            >
              <div className="header">
                <div className="title">
                  <span>{tag.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="search">
        <div className="card">
          <div className="card-content">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* <CardDisplay /> */}
      {/* <app-card-display [data]="data"></app-card-display> */}
    </>
  );
}

export default Home;