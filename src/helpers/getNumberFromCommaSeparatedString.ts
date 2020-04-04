export const getNumberFromCommaSeparatedString = (value: string): number =>
    parseFloat(value.replace(/,/g, ''));
