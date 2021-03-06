import { nanoid } from "nanoid";

export const settingsArray = [
    { text: "Auto Update", value: "autoUpdate" },
    { text: "Light Mode", value: "lightMode" },
];

export const theme = {
    light: {
        background: "#f6f5f5",
        card: "#d3e0ea",
        icons: "#ff884b",
        text: "#276678",
    },
    dark: {
        background: "#222831",
        card: "#30475e",
        icons: "#f2a365",
        text: "#ececec",
    },
};

export const initialSettings = {
    data: {
        autoUpdate: false,
        lightMode: false,
    },
    setSettingsData: () => {},
    handleSettingsUpdate: () => {},
};

export const initialRefresh = {
    shouldAllCardsRefresh: false,
    setShouldAllCardsRefresh: () => null,
};

export const initialCards = [
    {
        id: nanoid(),
        site: "yahoofinance",
        data: ["AMD"],
    },
    {
        id: nanoid(),
        site: "weather",
        data: ["10001"],
    },
    {
        id: nanoid(),
        site: "crypto",
        data: ["BTC"],
    },
    {
        id: nanoid(),
        site: "10fastfingers",
        data: ["2069581"],
    },
    {
        id: nanoid(),
        site: "crypto",
        data: ["ETH"],
    },
    {
        id: nanoid(),
        site: "weather",
        data: ["85001"],
    },
];

export const searchData = [
    { name: "Amazon", prefix: "a", url: "https://www.amazon.com/s?k={{query}}" },
    { name: "Google", prefix: "g", url: "https://www.google.com/search?q={{query}}" },
    { name: "Github", prefix: "gh", url: "https://github.com/search?q={{query}}" },
    { name: "Stack Overflow", prefix: "so", url: "https://stackoverflow.com/search?q={{query}}" },
    { name: "YouTube", prefix: "yt", url: "https://www.youtube.com/results?search_query={{query}}" },
    { name: "Google Calendar", prefix: "cal", url: "https://calendar.google.com/calendar" },
    { name: "Google Translate", prefix: "gt", url: "https://translate.google.com/?sl=en&tl=es&text={{query}}" },
    { name: "Google Fonts", prefix: "gfont", url: "https://fonts.google.com/?query={{query}}" },
    { name: "React Icons", prefix: "ri", url: "https://react-icons.github.io/react-icons/search?q={{query}}" },
    { name: "Wikipedia", prefix: "w", url: "https://www.wikipedia.org/wiki/{{query}}" },
    { name: "Read The Docs", prefix: "rtd", url: "https://readthedocs.org/search/?q={{query}}" },
    { name: "Reddit", prefix: "r", url: "https://www.reddit.com/search/?q={{query}}" },
    { name: "Mozilla Developer Network", prefix: "mdn", url: "https://developer.mozilla.org/en-US/search?q={{query}}" },
    { name: "Google Maps", prefix: "maps", url: "https://www.google.com/maps/search/{{query}}" },
    { name: "Yahoo Finance", prefix: "yf", url: "https://finance.yahoo.com/quote/{{query}}" },
    { name: "Namecheap", prefix: "nc", url: "https://www.namecheap.com/domains/registration/results/?domain={{query}}" },
    { name: "Netlify", prefix: "nfly", url: "https://app.netlify.com/" },
    { name: "Spanish Dict (Conjugations)", prefix: "sdc", url: "https://www.spanishdict.com/conjugate/{{query}}" },
    { name: "Node Package Manager (NPM) Search", prefix: "npms", url: "https://www.npmjs.com/search?q={{query}}" },
    { name: "Node Package Manager (NPM) Exact Match", prefix: "npm", url: "https://www.npmjs.com/package/{{query}}" },
    { name: "Vercel Dashboard", prefix: "vercel", url: "https://vercel.com/dashboard" },
];

export const selectDropdownStyles = (theme) => ({
    option: (provided) => ({
        ...provided,
        color: theme.text,
        backgroundColor: theme.background,
    }),
    control: (base) => ({
        ...base,
        color: theme.text,
        backgroundColor: theme.background,
        boxShadow: null,
    }),
    menuList: (base) => ({
        ...base,
        padding: 0,
    }),
    input: (base) => ({
        ...base,
        color: theme.text,
        fontFamily: "inherit",
    }),
    singleValue: (base) => ({
        ...base,
        color: theme.text,
    }),
});
