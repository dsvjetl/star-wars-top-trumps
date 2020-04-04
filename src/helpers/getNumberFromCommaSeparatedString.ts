export const getNumberFromCommaSeparatedString = (value: string): number | string =>
    parseFloat(value.replace(/,/g, ''));
