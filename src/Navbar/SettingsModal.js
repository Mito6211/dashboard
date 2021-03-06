import React from "react";
import Modal from "../Modal";
import { settingsArray } from "../constants";

import SettingCard from "./SettingCard";

export default function SettingsModal({
    data: { isSettingsModalOpen, setIsSettingsModalOpen },
}) {
    return (
        <Modal
            open={isSettingsModalOpen}
            close={() => setIsSettingsModalOpen(false)}
        >
            <h1>Settings</h1>
            <h3 style={{ margin: "30px 0px 15px 0px" }}>General</h3>
            {settingsArray.map(({ text, value }) => (
                <SettingCard key={value} text={text} value={value} />
            ))}
        </Modal>
    );
}
