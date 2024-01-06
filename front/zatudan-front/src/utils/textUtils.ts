export function splitSentenceByColon(sentence: string) {
    const colonIndex = sentence.search(/[:：]/u);

    if (colonIndex !== -1) {
        const speaker = sentence.substring(0, colonIndex);
        const content = sentence.substring(colonIndex + 1);

        return { speaker, content };
    } else {
        return null;
    }
}