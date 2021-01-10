import React from "react";

import { Container } from "./styles";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const Settings: React.FC = () => {
  return (
    <Container>
      <Tabs className={"Tab"}>
        {/* Div  */}
        <TabList className={"menu-settings"}>
          {/* ul  */}
          <Tab>Theme</Tab>
          <Tab>Another</Tab>
          <Tab>Security</Tab>
        </TabList>
        <div className={"info-settings-display"}>
          <TabPanel>Here you will choose your theme!</TabPanel>
          <TabPanel>Another Tab </TabPanel>
          <TabPanel>Password and secure stuff</TabPanel>
        </div>
      </Tabs>
    </Container>
  );
};

export default Settings;
