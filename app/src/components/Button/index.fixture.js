// fixture
import Button from "./index";
import OutlinedButton from "./OutlinedButton";

export default [
  {
    name: "Primary",
    component: Button,
    children: "Button"
  },
  {
    name: "Info",
    component: Button,
    props: {
        type: 'info'
    },
    children: "Button"
  },
  {
    name: "Warning",
    component: Button,
    props: {
        type: 'warning'
    },
    children: "Button"
  },
  {
    name: "Danger",
    component: Button,
    props: {
        type: 'danger'
    },
    children: "Button"
  },
  {
    name: "Primary",
    component: OutlinedButton,
    children: "Button"
  },
  {
    name: "Info",
    component: OutlinedButton,
    props: {
        type: 'info'
    },
    children: "Button"
  },
  {
    name: "Warning",
    component: OutlinedButton,
    props: {
        type: 'warning'
    },
    children: "Button"
  },
  {
    name: "Danger",
    component: OutlinedButton,
    props: {
        type: 'danger'
    },
    children: "Button"
  },
];
