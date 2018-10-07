import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import OutlinedButton from "./OutlinedButton";

storiesOf("Button", module)
  .addDecorator(storyFn => (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {storyFn()}
    </div>
  ))
  .add("Default", () => (
    <React.Fragment>
      <Button onClick={action("primary clicked")}>Button</Button>
      <Button type="info" onClick={action("info clicked")}>
        Button
      </Button>
      <Button type="warning" onClick={action("warning clicked")}>
        Button
      </Button>
      <Button type="danger" onClick={action("danger clicked")}>
        Button
      </Button>
    </React.Fragment>
  ))
  .add("Outlined", () => (
    <React.Fragment>
      <OutlinedButton onClick={action("primary clicked")}>
        Button
      </OutlinedButton>
      <OutlinedButton type="info" onClick={action("info clicked")}>
        Button
      </OutlinedButton>
      <OutlinedButton type="warning" onClick={action("warning clicked")}>
        Button
      </OutlinedButton>
      <OutlinedButton type="danger" onClick={action("danger clicked")}>
        Button
      </OutlinedButton>
    </React.Fragment>
  ));
