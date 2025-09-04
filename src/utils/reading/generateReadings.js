/**
 * Generates mock energy usage readings.
 * Each reading includes a timestamp (one hour apart) and a randomized usage value.
 *
 * @param {number} length - Number of readings to generate. Default is 1200.
 * @returns {Array<Object>} Array of reading objects with `time` and `value` properties.
 */
export const getReadings = async (length = 1200) => {
    const current = Date.now();
    const hour = 1000 * 60 * 60;

    // Generate an array of readings with timestamps decreasing by one hour
    return [...new Array(length)].map((_, index) => ({
        time: new Date(current - index * hour).toISOString(),
        value: Math.random() * 0.7 + 0.4,
    }));
};
