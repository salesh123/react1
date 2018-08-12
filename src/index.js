
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
//import TableRow from "./components/TableRow";

const API_KEY='AIzaSyDhFBwddbg7b5sDwRhRun6Dj5zBz3WqLks';


//const Main=() =>{
//return (<div>< App/></div>);
//}
class Main extends  React.Component{
   render(){
       return(
       <div>
           < App/>

       </div>
       );
   }
}

ReactDom.render(<Main/>,document.querySelector('.container'));