// Original ProgrammingLanguageData
const ProgrammingLanguageData = [
    { "language": "Java", "color": "blue" },
    { "language": "Python", "color": "lightblue" },
    { "language": "JavaScript", "color": "yellow" },
    { "language": "C++", "color": "steelblue" },
    { "language": "C#", "color": "purple" },
    { "language": "Ruby", "color": "red" },
    { "language": "Swift", "color": "orange" },
    { "language": "PHP", "color": "gray" },
    { "language": "Go", "color": "teal" },
    { "language": "Rust", "color": "brown" },
    { "language": "Kotlin", "color": "coral" },
    { "language": "TypeScript", "color": "navy" },
    { "language": "Scala", "color": "crimson" },
    { "language": "Haskell", "color": "cobalt" },
    { "language": "Perl", "color": "turquoise" },
    { "language": "MATLAB", "color": "royalblue" },
    { "language": "SQL", "color": "goldenrod" },
    { "language": "Visual Basic", "color": "lavender" },
    { "language": "R", "color": "forestgreen" },
    { "language": "Dart", "color": "cyan" }
];

// Function to shuffle the colors
const shuffleColors = (data) => {
    const colors = data.map(item => item.color);

    // Fisher-Yates Shuffle Algorithm
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    // Assign shuffled colors back to the items
    return data.map((item, index) => ({
        ...item,
        color: colors[index]
    }));
};

// Create the randomized version of the data
export const myProgrammingLanguageDataRandomized = shuffleColors(ProgrammingLanguageData);

// Optional: Export the original data as well
export const myProgrammingLanguageDataOriginal = ProgrammingLanguageData;
