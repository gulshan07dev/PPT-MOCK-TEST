function firstUniqChar(s) {
    const frequencyMap = new Map();

    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (frequencyMap.get(char) === 1) {
            return i;
        }
    }

    return -1; // No non-repeating character found
}