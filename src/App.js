import { Component } from "react";
import { renderCurrentType, treeToMap } from "./utils";
import debounce from "lodash/debounce";
import data from "./data.json";
class App extends Component {

  constructor(){
    super();
    this.map = treeToMap(data);
    this.state = {
      search: '',
    }
  }

  // map = {"/Common7/IDE/msdia140.dll": "msdia140.dll",
  // "/Common7/Tools/msdia140.dll": "msdia140.dll" }

  handleChange = (e) => {
    // const value = e.target.value;
    console.log('e', e.target.value,)
    this.setState({...this.state, search: e.target.value});
  }

  extendFolders = () => {
    
    return Object.entries(this.map)
    .filter(([_, value]) => value.startsWith(this.state.search))
    .map(([path]) => this.pathToArr(path))
    .flat()
    // return ["/Common7", "/Common7/IDE", "/Common7/IDE/msdia140.dll"] //for msdia140
  }

  pathToArr = (path) => {
    const splited = path.split('/').filter(i => !!i);
    return splited.reduce((acc, current) => {
      const last = acc[acc.length - 1];
      if(last){
        return [...acc, last + "/" + current];
      }
    return [...acc, '/' + current];
    }, [])
  }

  render(){
    // console.log(' this.extendFolders()',  this.extendFolders())
    return (
      <>
      <input placeholder="type me" onChange={debounce(this.handleChange, 100)} value={this.state.search} />
      <ul>
        {renderCurrentType(data, this.extendFolders())}
      </ul>
      </>
    );
  }
}

export default App;
