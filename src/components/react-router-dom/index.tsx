import React from 'react';
import usePath from '../../hooks/usePath';
export interface RouteProps {
  path: string;
  component: React.ReactNode;
}

export const Route = ({ path, component }: RouteProps) => {
  return <div>{component}</div>;
};
interface RouterProps {
  children: React.ReactElement<RouteProps>[];
}

export const Router = ({ children }: RouterProps) => {
  const path = usePath();
  return (
    <>
      {children.length === undefined ? (
        children
      ) : (
        <>
          {children?.map((router: ReactElement<RouteProps>) => {
            if (router.props.path === path) return router;
          })}
        </>
      )}
    </>
  );
};
