import logo from "./logo.svg";
import "./App.css";

//Use class components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: [],
    };
  }

  render() {
    return (
      <div className="App">
        <h>Rounddove interactive webapp</h>
      </div>
    );
  }
}

export default App;
