import "./App.css";
import LeftDrawer from "./components/LeftDrawer";
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:5000/getData"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.data)
      });
  }, []);

  const updatePlugin = async (pluginName, isActive, selectedTab) => {
    if(isActive){
      data.tabdata[selectedTab].active.push(pluginName)
      data.tabdata[selectedTab].inactive = data.tabdata[selectedTab].inactive.filter(d => d != pluginName)
    }
    else{
      data.tabdata[selectedTab].inactive.push(pluginName)
      data.tabdata[selectedTab].active = data.tabdata[selectedTab].active.filter(d => d !== pluginName)
    }

    updatePluginData(data)
    
  }

  const enableDisableAllPlugin = async(isEnabled) => {
    if(!isEnabled){
      data.tabs.forEach(tab => {
        data.tabdata[tab].active.forEach(activePlugin => {
          data.tabdata[tab].disabled.push(activePlugin)
        })
        data.tabdata[tab].active = []
        data.tabdata[tab].inactive.forEach(inactivePlugin => {
          data.tabdata[tab].disabled.push(inactivePlugin)
        })
        data.tabdata[tab].inactive = []
      });
    }

    updatePluginData(data)
    
  }

  async function updatePluginData(data){
    let res = await fetch("http://localhost:5000/updateData", {
      method: "POST",
      body: JSON.stringify({
        data : data
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return (
    <div className="App">
      <LeftDrawer tabData={data?.tabdata} tabs={data?.tabs} plugins={data?.plugins} updatePlugin={updatePlugin} enableDisableAllPlugin={enableDisableAllPlugin} />
    </div>
  );
}

export default App;
