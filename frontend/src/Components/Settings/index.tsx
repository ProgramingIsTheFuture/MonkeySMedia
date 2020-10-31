import React from "react";

import { Container } from "./styles";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const Settings: React.FC = () => {
  return (
    <Container>
      <Tabs>
        {/* Div  */}
        <TabList className={"menu-settings"}>
          {/* ul  */}
          <Tab>Security</Tab>
          <Tab>Theme</Tab>
        </TabList>
        <div className={"info-settings-display"}>
          <TabPanel>
            1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quis
            doloribus tempora labore at saepe, officia commodi enim beatae quasi
            expedita repellendus eligendi sapiente accusantium ad eaque
            praesentium dolores cum, perspiciatis numquam sunt ut hic?
            Laudantium provident mollitia nulla quod, ipsum sed velit eligendi
            accusamus explicabo assumenda, culpa fuga beatae, facilis inventore
            asperiores a labore hic delectus dolores adipisci libero iusto?
            Placeat nobis maiores, autem dolore a vel, rem eveniet asperiores
            minus deserunt, voluptas accusantium et culpa quidem molestias.
            Libero!
          </TabPanel>
          <TabPanel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quis
            doloribus tempora labore at saepe, officia commodi enim beatae quasi
            expedita repellendus eligendi sapiente accusantium ad eaque
            praesentium dolores cum, perspiciatis numquam sunt ut hic?
            Laudantium provident mollitia nulla quod, ipsum sed velit eligendi
            accusamus explicabo assumenda, culpa fuga beatae, facilis inventore
            asperiores a labore hic delectus dolores adipisci libero iusto?
            Placeat nobis maiores, autem dolore a vel, rem eveniet asperiores
            minus deserunt, voluptas accusantium et culpa quidem molestias.
            Libero! 2
          </TabPanel>
        </div>
      </Tabs>
    </Container>
  );
};

export default Settings;
