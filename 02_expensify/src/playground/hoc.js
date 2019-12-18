// higher order component - a component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
    // could also use ternary ? operator inside <div></div>
  return (props) => (
    <div>
      {props.isAuthenticated &&
        <p>You are authorised</p> ||
        <p>Sorry, no dice</p>}
        <WrappedComponent {...props} />
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="here are the deets" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="here are the deets" />, document.getElementById('app'));

