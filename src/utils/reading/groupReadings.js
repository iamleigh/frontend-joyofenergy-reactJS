// Groups an array of readings by day and sums their values
export const groupByDay = readings => {
    // Use reduce to accumulate values by day
    const groupedByDay = readings.reduce((curr, { time, value }) => {
        const readingDate = new Date(time); // Convert reading time to Date object

        // Create a new date with time set to midnight to group by day
        const day = new Date(
            readingDate.getFullYear(),
            readingDate.getMonth(),
            readingDate.getDate()
        ).getTime(); // Convert to timestamp

        // Initialize the day entry if it doesn't exist
        if (!curr[day]) curr[day] = 0;

        // Add the reading value to the corresponding day's total
        curr[day] += value;
        return curr;
    }, {});

    // Convert the grouped object into an array of { time, value } objects
    return Object.entries(groupedByDay).map(([day, value]) => ({
        time: Number(day),
        value,
    }));
};
