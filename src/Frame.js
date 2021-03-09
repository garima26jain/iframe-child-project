import React from "react";
import ReactDOM from "react-dom";

class Frame extends React.Component {
  componentDidMount = () => {
    this.renderFrameContents();
  };

  renderFrameContents = () => {
    var iframe = document.getElementById('iframe');
    var style = document.createElement('link')
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.href = 'src/styles.css'
    var doc = ReactDOM.findDOMNode(this).contentWindow.document;
    iframe.contentDocument.head.appendChild(style)
    if (doc.readyState === "complete") {
      // var contents = (
      //   <div>
      //     &shy;{this.props.head}
      //     {this.props.children}
      //   </div>
      // )
      ReactDOM.render(this.props.head, doc.head);
      ReactDOM.render(this.props.children, doc.body);
    } else {
      setTimeout(this.renderFrameContents, 0);
    }
    console.log(doc);
  };

  componentDidUpdate = () => {
    this.renderFrameContents();
  };
  componentWillUnmount = () => {
    ReactDOM.unmountComponentAtNode(
      ReactDOM.findDOMNode(this).contentWindow.document.body
    );
  };

  render() {
    return <iframe id='iframe' />;
  }
}

export default Frame;
