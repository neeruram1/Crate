// Imports
import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

// Component
class ScrollToTop extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

// scrolls to top of page ever time route is changed
// return this.props.children allows this to wrap app
