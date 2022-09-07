import React from "react";
import "./styles.css";
import NavBar from "./Header/NavBar";
import CardUserList from "./components/CardUserList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className='Cards-Container'>
				  <CardUserList />
			  </div>
      </div>
    );
  }
}

export default App;
