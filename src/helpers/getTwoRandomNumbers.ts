export const getTwoRandomNumbers = (): number[] => {
    const n1 = Math.ceil(Math.random() * 30);
    let n2 = Math.ceil(Math.random() * 30);

    while (n1 === n2) {
        n2 = Math.floor(Math.random() * 30);
    }

    return [n1, n2];
};
