// App Imports
import List from "../../modules/crate/List";

// Crate routes
export default {
  list: {
    path: "/crates",
    component: List,
    auth: true,
  },
};
// this is the display for the crates page right before our survey is triggered
