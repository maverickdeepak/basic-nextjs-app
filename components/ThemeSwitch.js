import { useEffect, useState } from "react";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("toggle");
  return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  const [toggle, setToggle] = useState(loadDarkMode);
  const toggleButton = () => {
    setToggle(!toggle);
    localStorage.setItem("toggle", JSON.stringify(!toggle));
  };

  useEffect(() => {
    const body = document.body;
    if (toggle === true) {
      body.classList.add("dark-mode");
      document.getElementById("toggle-btn").setAttribute("checked", "checked");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [toggle]);

  return (
    <div className="toggle-main">
      <input type="checkbox" id="toggle-btn" onClick={toggleButton} />
      <label htmlFor="toggle-btn" className="toggle-btn">
        <span className="toggle"></span>
      </label>
    </div>
  );
}

export default ThemeSwitch;
