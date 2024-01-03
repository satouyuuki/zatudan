const UTCtoJST = (utcDateString: string) => {
    const utcDate = new Date(utcDateString + " UTC");
    utcDate.setHours(utcDate.getHours() + 9);
    return utcDate.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
};

export { UTCtoJST };