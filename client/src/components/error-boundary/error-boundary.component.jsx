import React from "react";
import { ErrorImageText } from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <ErrorImageText>Sorry this page is broken</ErrorImageText>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
