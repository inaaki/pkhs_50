import React from 'react';

function withNav(Component) {
  return props => <Component {...props} minH={'calc(100vh - 67.5px)'} />;
}

export default withNav;
