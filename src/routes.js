// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Attack from "layouts/dashboard/components/attack";

// UI Dashboard React icons

import { BsCreditCardFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const routes = [
  {
    //dashboard route
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    //attack route

    type: "collapse",
    name: "Attack",
    key: "Attack",
    route: "/attack/:force",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Attack,
    noCollapse: true,
  },
];

export default routes;
