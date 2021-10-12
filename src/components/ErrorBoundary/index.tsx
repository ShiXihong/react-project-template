
import { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps
{
}

interface ErrorBoundaryState
{
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
  constructor(props: ErrorBoundaryState)
  {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error)
  {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo)
  {
    this.setState({
      hasError: true,
    })
    console.warn(error, errorInfo);
  }

  render()
  {
    if (this.state.hasError)
    {
      // You can render any custom fallback UI
      return <h1>Oops!!! Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
