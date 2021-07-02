
export interface RouteConfig
{
  key: string;
  type: RouteType;
  path: string;
  component: any;
  exact?: boolean;
  props?: any;
}

export enum RouteType
{
  APPLIED = "Applied",
  UNAUTHENTICATED = "Unauthenticated",
  AUTHENTICATED = "Authenticated",
}
