// Sorts an array of reading objects in ascending order by their 'time' property
export const sortByTime = readings => {
    // Create a shallow copy of the array to avoid mutating the original
    return [...readings].sort(
        // Compare readings by 'time' (assumes 'time' is a value that can be subtracted, like a timestamp)
        (readingA, readingB) => readingA.time - readingB.time // if negative, readingA comes before readingB
    );
};
