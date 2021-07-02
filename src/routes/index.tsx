import { Switch } from 'react-router-dom';
import { AppliedRoute, UnauthenticatedRoute, AuthenticatedRoute } from '../components/CustomRoute';
import { RouteConfig, RouteType } from '../interface/route';
import { routes } from './RouteConfig';

const switchComponent = ({ childProps }: any) =>
{
  return (
    <Switch>
      {
        routes.map((item: RouteConfig) =>
        {
          return renderRoute({
            ...item,
            props: { ...item.props, ...childProps }
          });
        })
      }
    </Switch>
  )
}

const renderRoute = (config: RouteConfig) =>
{
  const { key, type, path, component, exact, props } = config;
  switch (type)
  {
    case RouteType.AUTHENTICATED:
      return <AuthenticatedRoute key={key} path={path} exact={exact} component={component} props={props} />;
    case RouteType.UNAUTHENTICATED:
      return <UnauthenticatedRoute key={key} path={path} exact={exact} component={component} props={props} />;
    default:
      return <AppliedRoute key={key} path={path} exact={exact} component={component} props={props} />;
  }
}

export default switchComponent;
