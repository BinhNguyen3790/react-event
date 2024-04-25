import { Component } from "react";

class HandleEvent extends Component {
  
  hadleClick = (name2) => {
    alert("hello:" + name2);
  }

  render() {
    return (
      <div>
        <p>handle component</p>
        <button
          onClick={() => {
            this.hadleClick("Binh");
          }}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default HandleEvent;
