import { Component } from "react";
import { renderCurrentType, treeToMap } from "./utils";
import data from "./data.json";
class App extends Component {

  constructor(){
    super();
    // this.map = treeToMap(data[0].children);
    this.map = treeToMap(data);
  }

  // map = {"/Common7/IDE/msdia140.dll": "msdia140.dll",
  // "/Common7/Tools/msdia140.dll": "msdia140.dll" }

  render(){
    console.log(this.map)
    return (
      <ul>
        {renderCurrentType(data, ["/Common7",  "/VC", "/Common7/IDE", "/Common7/Tools","/VC/bin"])}
      </ul>
    );
  }
}

export default App;
