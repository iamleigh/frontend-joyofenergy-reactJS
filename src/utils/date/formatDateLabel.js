/**
 * Formats a timestamp (number or string) into DD/MM format.
 * @param {number|string} timestamp
 * @returns {string}
 */
export const formatDateLabel = timestamp => {
    const date = new Date(timestamp);
    const month = date.getMonth();
    const day = date.getDate();

    const formatPart = value => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    return `${formatPart(day)}/${formatPart(month + 1)}`;
};
