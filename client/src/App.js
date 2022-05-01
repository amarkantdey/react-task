import "./App.css";
import LeftDrawer from "./components/LeftDrawer";
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPluginData()
  }, []);

  function getPluginData() {
    fetch("http://localhost:5000/getData")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      });
  }

  const updatePlugin = async (pluginName, isActive, selectedTab) => {
    if (isActive) {
      data.tabdata[selectedTab].active.push(pluginName);
      data.tabdata[selectedTab].inactive = data.tabdata[
        selectedTab
      ].inactive.filter((d) => d != pluginName);
    } else {
      data.tabdata[selectedTab].inactive.push(pluginName);
      data.tabdata[selectedTab].active = data.tabdata[
        selectedTab
      ].active.filter((d) => d !== pluginName);
    }

    await updatePluginData(data);
    await getPluginData();
  };

  const enableDisableAllPlugin = async (isDisabled, selectedTab) => {
    let tmpData = data;
    if (isDisabled) {
      tmpData.tabdata[selectedTab].active.forEach((activePlugin) => {
        tmpData.tabdata[selectedTab].disabled.push(activePlugin);
      });
      tmpData.tabdata[selectedTab].inactive.forEach((inactivePlugin) => {
        tmpData.tabdata[selectedTab].disabled.push(inactivePlugin);
      });
    } else {
      tmpData.tabdata[selectedTab].disabled.forEach((activePlugin) => {
        if(!tmpData.tabdata[selectedTab].active.includes(activePlugin))
        tmpData.tabdata[selectedTab].active.push(activePlugin);
      });
      tmpData.tabdata[selectedTab].disabled = [];
      tmpData.tabdata[selectedTab].inactive = [];
    }

    await updatePluginData(tmpData);
    await getPluginData();
  };

  async function updatePluginData(data) {
    let res = await fetch("http://localhost:5000/updateData", {
      method: "POST",
      body: JSON.stringify({
        data: data,
      }),
      headers: {"Content-Type": "application/json"},
    });
  }

  return (
    <div className="App">
      <LeftDrawer
        tabData={data?.tabdata}
        tabs={data?.tabs}
        plugins={data?.plugins}
        updatePlugin={updatePlugin}
        enableDisableAllPlugin={enableDisableAllPlugin}
        key={data}
      />
    </div>
  );
}

export default App;
