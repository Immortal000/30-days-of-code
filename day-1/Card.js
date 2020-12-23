class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`card ${this.props.mode ? "card-dark" : "card-light"} ${
          this.props.mode ? "dark-mode" : "light-mode"
        }`}
      >
        <h1 className="card-title">{this.props.title}</h1>
        <p className="card-summary">{this.props.summary}</p>
        <a href={this.props.link} className="code-link">
          Github
        </a>
      </div>
    );
  }
}
