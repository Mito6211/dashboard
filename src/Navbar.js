import React, { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";

import { saveToStorage, submitSearch } from "./utils";
import { SITE_INFO } from "./cardFunctions";
import ThemeContext from "./context";
import { settingsArray, searchData } from "./constants";

import Modal from "./Modal";
import SettingCard from "./SettingCard";
import Select from "react-select";
import { MdAdd, MdSettings, MdSearch } from "react-icons/md";
import "./Navbar.css";

const NAV_STYLES = {
    margin: "3em 1em 2em 1em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

export default function Navbar({
    setCards,
    data: { settingsData, handleSettingsUpdate },
}) {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        saveToStorage("settings", settingsData);
    }, [settingsData]);

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        site: "10fastfingers",
        data: [],
        search: "",
    });

    const handleSiteInputChange = ({ target: { value } }, index) => {
        const newData = [...formData.data];
        newData[index] = value;

        setFormData((prev) => ({
            ...prev,
            data: newData,
        }));
    };

    const makeNewCard = (e) => {
        e.preventDefault();
        setCards((prev) => [
            ...prev,
            {
                site: formData.site,
                data: formData.data,
                id: nanoid(),
            },
        ]);
    };

    return (
        <div style={NAV_STYLES}>
            <span style={{ fontSize: "1.5em", fontWeight: "600" }}>
                Statboard
            </span>
            <div>
                <form
                    onSubmit={(e) =>
                        submitSearch(e, formData.search, searchData)
                    }
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <input
                        type="text"
                        className="input"
                        style={{
                            marginRight: "15px",
                            border: `4px solid ${theme.card}`,
                        }}
                        onChange={({ target: { value } }) => {
                            setFormData((prev) => ({
                                ...prev,
                                search: value,
                            }));
                        }}
                    />
                    <MdSearch style={{ fontSize: "2em", cursor: "pointer" }} />
                </form>
            </div>
            <div className="nav--icons">
                <MdAdd onClick={() => setIsAddModalOpen(true)} />
                <MdSettings onClick={() => setIsSettingsModalOpen(true)} />
            </div>

            <Modal open={isAddModalOpen} close={() => setIsAddModalOpen(false)}>
                <h1>Add</h1>
                <Select
                    options={Object.entries(SITE_INFO).map((siteValue) => ({
                        value: siteValue[0],
                        label: siteValue[0],
                    }))}
                    onChange={({ value }) => {
                        setFormData((prev) => ({
                            ...prev,
                            site: value,
                            data: [],
                        }));
                    }}
                />
                <form>
                    {SITE_INFO[formData.site].dataTypes.map(
                        (dataType, index) => (
                            <input
                                className="input"
                                key={formData.site + dataType}
                                type="text"
                                value={formData.data[index] || ""}
                                onChange={(e) => {
                                    handleSiteInputChange(e, index);
                                }}
                                placeholder={dataType}
                            />
                        )
                    )}
                    <button onClick={makeNewCard}>Add</button>
                </form>
            </Modal>
            <Modal
                open={isSettingsModalOpen}
                close={() => setIsSettingsModalOpen(false)}
            >
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
