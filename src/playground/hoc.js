//Higher Order Component ( HOC ) - A component that renders another component
//Reuse Code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info Stuff</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private, biss</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
      )}
    </div>
  );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the details" />, document.getElementById('app'));
