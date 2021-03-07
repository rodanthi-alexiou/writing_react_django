import React, { Component } from 'react'
import { TextField, Input } from "@material-ui/core";

class PinterestWidget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: '',
    };

    this.handleBoardChange = this.handleBoardChange.bind(this);

  }

  handleBoardChange(e) {
    this.setState({
      board: e.target.value,
    });
  }



    componentDidMount() {
        if (!window.doBuild) {
          this.preloadWidgetScript();
        } else {
          window.doBuild();
        }
      }
      
      preloadWidgetScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.dataset.pinBuild = 'doBuild';
        script.src = '//assets.pinterest.com/js/pinit.js';
        document.body.appendChild(script);
      }

  render() {
    const { url } = this.props

    return (
        <div>
        <h1>PINTEREST</h1>

      <TextField id="outlined-basic" label="Pinterest Name" variant="outlined" />


        <a href="https://www.pinterest.com/rodalexiou/"
            data-pin-do="embedUser"
            data-pin-board-width="700"
            data-pin-scale-height="320"
            data-pin-scale-width="80">
        </a>
      </div>
    )
  }
}

export default PinterestWidget