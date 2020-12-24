class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSeconds: 0,
      interval: 0,
    };
  }

  render() {
    const timer = () => {
      this.setState({ totalSeconds: this.state.totalSeconds - 1 });
      document.title = `(${Math.floor(this.state.totalSeconds / 60)}) Minutes Remaining`;
    };

    const reset = () => {
      this.setState({ totalSeconds: 0 });
      clearInterval(this.state.interval);
      document.title = "Timer";
    };

    const addTime = (seconds) => {
      this.setState({ totalSeconds: seconds }, () => {
        this.setState({
          interval: setInterval(() => {
            timer();
            if (this.state.totalSeconds == 0) {
              clearInterval(this.state.interval);
            }
          }, 1000),
        });
      });
    };
    return (
      <>
        <button onClick={() => addTime(1500)}>25 Minute Work</button>
        <button onClick={() => addTime(600)}>Break</button>
        <button onClick={() => reset()}>Reset</button>
        <p>
          {Math.floor(this.state.totalSeconds / 60)}:{this.state.totalSeconds % 60}
        </p>
      </>
    );
  }
}
