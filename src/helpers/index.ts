const addZeroToBeginingOfNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
};

export const getDate = (dateInMilliseconds: number): string => {
    const date: Date = new Date(dateInMilliseconds);
    const utcYear: number = date.getUTCFullYear();
    const utcMonth: number = date.getUTCMonth() + 1;
    const utcDayNumber: number = date.getUTCDate();

    return `${utcYear}-${addZeroToBeginingOfNumber(utcMonth)}-${addZeroToBeginingOfNumber(utcDayNumber)}`
};

export const converteDate = (oldDateFormat: string): string => {
    return oldDateFormat.split('-').reverse().join('.')
};
