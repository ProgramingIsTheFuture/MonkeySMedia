import React from "react";

import ThemeChooser from "./ThemeChooser";
import PassChanger from "./PassChanger";
import { Container } from "./styles";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

export default function Root(props) {
  return (
    <Container>
      <Tabs className={"Tab"}>
        {/* Div  */}
        <TabList className={"menu-settings"}>
          {/* ul  */}
          <Tab>Theme</Tab>
          <Tab>Security</Tab>
        </TabList>
        <div className={"info-settings-display"}>
          <TabPanel>
            <ThemeChooser />
          </TabPanel>
          <TabPanel>
            <PassChanger />
          </TabPanel>
        </div>
      </Tabs>
    </Container>
  );
}
