class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      info: [
        {
          title: "Day 1: Website with dark mode",
          summary: "A website that showcases all the projects",
          link: "https://github.com/Immortal000/30-days-of-code/tree/main/day-1",
          languages: "Javascript(React)",
        },
        {
          title: "Day 2: Timer for productivity",
          summary: "Timer for break and rest with updating title",
          link: "https://github.com/Immortal000/30-days-of-code/tree/main/day-2",
          languages: "Javascript(React)",
        },
      ],
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
          {this.state.info.map((data) => {
            return (
              <Card
                title={data.title}
                summary={data.summary}
                link={data.link}
                languages={data.languages}
                mode={this.state.dark}
              />
            );
          })}
        </div>
      </>
    );
  }
}
