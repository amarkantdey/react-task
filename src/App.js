import "./App.css";
import LeftDrawer from "./components/LeftDrawer";
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "data.json"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.data)
      });
  }, []);

  return (
    <div className="App">
      <LeftDrawer tabData={data?.tabdata} tabs={data?.tabs} plugins={data?.plugins} />
    </div>
  );
}

export default App;
