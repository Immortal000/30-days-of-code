class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
    };
  }

  render() {
    const changeMode = (e) => {
      this.setState({ dark: e.target.checked ? true : false });
    };
    document.body.className = this.state.dark ? "dark-mode" : "light-mode";
    return (
      <>
        <label htmlFor="mode">Dark Mode:</label>
        <input type="checkbox" name="mode" onClick={changeMode} />
        <div className="cards-holder">
          <h1>{this.state.mode}</h1>
          <Card
            title="Day 1: Website with dark mode"
            summary="A website that showcases all the projects"
            link="https://www.github.com"
            languages = "Javascript(React)"
            mode={this.state.dark}
          />
        </div>
      </>
    );
  }
}
