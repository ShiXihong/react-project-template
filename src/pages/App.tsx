import { Component, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import Routes from '../routes';
import './App.scss';

interface AppProps
{

}

interface AppState
{
  userToken?: string | null;
  refreshToken?: string | null;
  updateUserToken?: Function | null
  userProfile?: {};
}

export default class App extends Component<AppProps, AppState>{

  updateUserToken = (userToken: string) =>
  {
    this.setState({
      userToken: userToken
    });
  }

  render()
  {
    const childProps: AppState = {
      userToken: null,
      updateUserToken: this.updateUserToken,
    };

    return (
      <ErrorBoundary>
        <Router>
          <Suspense fallback={Loading}>
            <Routes childProps={childProps} />
          </Suspense>
        </Router>
      </ErrorBoundary>
    );
  }
}
