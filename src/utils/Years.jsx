const Years = (value) => {
    let fullYears = [];

    let today = new Date();
    let year = today.getFullYear();

    for (value; value <= year; value++) {
        fullYears.push({ value: value, label: value });
    }
    return fullYears;
};

export default Years;
