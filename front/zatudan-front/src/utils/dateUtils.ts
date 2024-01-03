const UTCtoJST = (utcDateString: string) => {
    const utcDate = new Date(utcDateString);
    utcDate.setHours(utcDate.getHours() + 9);
    return utcDate.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
};

export { UTCtoJST };