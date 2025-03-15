const fs = require('fs');

// File paths
const inputFile = 'usernames.txt';
const outputFile = 'surf_users.json';

// Function to process usernames
const processUsernames = () => {
    try {
        // Read the file content
        const data = fs.readFileSync(inputFile, 'utf8');

        // Convert each line to a username, filter out empty lines
        const usernames = data.split('\n').map(line => line.trim()).filter(line => line);

        // Convert to the required JSON format
        const formattedUsers = usernames.map(username => ({
            username,
            status: "pending" // Default status
        }));

        // Save as JSON file
        fs.writeFileSync(outputFile, JSON.stringify(formattedUsers, null, 2));

        console.log(`✅ Conversion complete! Check '${outputFile}'`);
    } catch (error) {
        console.error("❌ Error processing file:", error);
    }
};

// Run the function
processUsernames();
