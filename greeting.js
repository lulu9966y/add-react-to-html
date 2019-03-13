class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Hello World</p>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
