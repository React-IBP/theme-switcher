export const convertNumberTok = (number) => {
    if (number >= 10000) {
        number = number / 1000
        return `${number}K`;
    }
    return number;
}