import Folder from "./components/Folder";
import File from "./components/File";
import { FOLDER_TYPE } from "./Constants";

export const renderCurrentType = (data, expandedFolders = []) => data.map(i => i.type === FOLDER_TYPE? <Folder name={i.name} children={i.children} expandedFolders={expandedFolders} /> : <File name={i.name} mime={i.mime}/>)

export const treeToMap = (data = [], path = '') => {
    let result = {};
    
    data.forEach(d => {
        if(d.type === FOLDER_TYPE){
            const r = treeToMap(d.children, `${path}/${d.name}` );
            result = {...result, ...r};
        } 
        else {
            result[`${path}/${d.name}`] = d.name;
        }
    })

    return result;
}
