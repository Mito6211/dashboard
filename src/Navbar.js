import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import SettingCard from "./SettingCard";

import { saveToStorage } from "./utils";

import "./Navbar.css";
import { MdAdd, MdSettings } from "react-icons/md";

const NAV_STYLES = {
    margin: "3em 1em 2em 1em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const settingsArray = [
    {
        text: "Auto Update",
        value: "autoUpdate",
    },
    {
        text: "Light Mode",
        value: "lightMode",
    },
];

export default function Navbar({
    data: { settingsData, handleSettingsUpdate },
}) {
    useEffect(() => {
        saveToStorage("settings", settingsData);
    }, [settingsData]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={NAV_STYLES}>
            <span style={{ fontSize: "1.5em", fontWeight: "600" }}>
                Statboard
            </span>
            <div className="nav--icons">
                <MdAdd />
                <MdSettings onClick={() => setIsModalOpen(true)} />
            </div>
            <Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
                <h1>Settings</h1>
                <h3 style={{ margin: "30px 0px 15px 0px" }}>General</h3>
                {settingsArray.map(({ text, value }) => (
                    <SettingCard
                        key={value}
                        text={text}
                        value={value}
                        settingsData={settingsData}
                        handleSettingsUpdate={handleSettingsUpdate}
                    />
                ))}
            </Modal>
        </div>
    );
}
