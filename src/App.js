import "./App.css";
import Body from "./Body";
import Actions from "./Actions";
import New from "./New";
import Edit from "./Edit";
import React from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get("/");
      setUserData(data);
    }
  }, []);

  return (
    <div className="App">
      <header>Home</header>
      <Body />
      <Actions />
      <New />
      <Edit />
    </div>
  );
}

export default App;
