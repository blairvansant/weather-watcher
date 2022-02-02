import React from "react";

const api = {
  key: "ed0416881a06725f3290f9ca566caa3a",
  base: "https://api.openweathermap.org/data/2.5/C2022-02-02-14-10-38.png2022-02-02-14-11-08.png"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search...">
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
