import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { parse } from 'query-string';

export const UnauthenticatedRoute = ({component: C, props: cProps, ...rest}: any) => {
  let redirect: string = parse(window.location.search).redirect as string;
  redirect = redirect ? redirect : '/';
  return (
      <Route
          {...rest}
          render={(props: any) => (
            !cProps.token ? <C {...props} {...cProps} /> : <Redirect to={redirect}/>
          )}
      />
  );
};

export const AuthenticatedRoute = ({component: C, props: cProps, ...rest}: any) => (
  <Route
      {...rest}
      render={(props: any) => (
          cProps.token ? <C {...props} {...cProps} /> : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`}/>
      )}
  />
);

export const AppliedRoute = ({component: C, props: cProps, ...rest}: any) => (
  <Route {...rest} render={(props: any) => <C {...props} {...cProps} />}/>
);