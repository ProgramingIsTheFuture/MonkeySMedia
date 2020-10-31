import React from 'react';

import { Container } from "./styles";
import Navbar from "../../../Components/GeralComponent/Navbar";
import Settings from "../../../Components/Settings";

const SettingsPage: React.FC = () => {
    return <Container>
        <Navbar />

        <Settings />
    </Container>
}

export default SettingsPage;