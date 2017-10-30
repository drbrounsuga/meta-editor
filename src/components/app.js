import React from 'react';
import FilterLink from './filterLink';

import Test from '../containers/test';

const App = () => (
    <div>
      <Test />
      <p>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </p>
    </div>
  );


export default App;