import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Route from "./Route";
import Search from "./Search";
import Translator from "./Translator";

const options = [
  {
    label: "Color Green",
    value: "green",
  },

  {
    label: "Color Red",
    value: "red",
  },

  {
    label: "Color Blue",
    value: "blue",
  },
];

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },

  {
    title: "Why use React",
    content: "React is a favorite JS library among engineers",
  },

  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translator">
        <Translator />
      </Route>
      <Route path="/dropdown">
        <div className="ui container">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            Toggle Dropdown
          </button>
          {showDropdown ? (
            <Dropdown
              label="Select a Color"
              options={options}
              selectedOption={selectedColor}
              onSelectedOptionChange={setSelectedColor}
            />
          ) : null}
          <div>
            <span style={{ color: `${selectedColor.value}` }}>
              This color is {selectedColor.value}
            </span>
          </div>
        </div>
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
};

export default App;
