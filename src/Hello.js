import React from "react";
import classNames from "classnames";
import Frame from "./Frame";
// import "./styles.css";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleState = () => {
    console.log("before clicked", this.state.show);
    this.setState({ show: !this.state.show });
  };
  
  render() {
    var classes = classNames({
      "": !this.state.show,
      "u-isHidden": this.state.show
    });

    return (
      <Frame head={
          <link
            type="text/css"
            rel="stylesheet"
            href="https://rawgit.com/ryanseddon/9d4448489145f8b21909/raw/a43ca3ab17ff0059efdd554940cdb5570b93c8a2/styles.css"
          />}>
        <div onClick={this.toggleState}>
          VAL: {this.state.show.toString()}
          <div className={this.state.show ? "": 'u-isHidden'}>
            this.state.show is true and now I'm visible
          </div>
          Hello {this.props.name}
        </div>
      </Frame>
    );
  }
}

export default Hello;
