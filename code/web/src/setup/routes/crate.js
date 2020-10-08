// App Imports
import List from '../../modules/crate/List';

// Crate routes
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true,
  },
};

/*
Mimicking this format for the /style-survey route
*/
