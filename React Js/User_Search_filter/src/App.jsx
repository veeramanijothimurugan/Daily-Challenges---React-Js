import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const users = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Michael Brown", email: "michael.brown@example.com" },
    { name: "Emily Johnson", email: "emily.johnson@example.com" },
    { name: "David Williams", email: "david.williams@example.com" },
    { name: "Sarah Davis", email: "sarah.davis@example.com" },
    { name: "Chris Miller", email: "chris.miller@example.com" },
    { name: "Jessica Wilson", email: "jessica.wilson@example.com" },
    { name: "Daniel Moore", email: "daniel.moore@example.com" },
    { name: "Olivia Taylor", email: "olivia.taylor@example.com" },
  ];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const user = users.find(
      (user) => user.name.toLowerCase() === input.toLowerCase()
    );
    if (user) {
      setResult(user.email);
    } else {
      setResult("Not found");
    }
  };

  return (
    <>
      <div className="container">
        <h3>User Search Filter</h3>
        <div className="searchbar">
          <input
            type="text" placeholder="John Doe"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="icon" type="submit">
            <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
          </button>
        </div>
        <div className={result&&"result"}>{result}</div>
      </div>
    </>
  );
}

export default App;
