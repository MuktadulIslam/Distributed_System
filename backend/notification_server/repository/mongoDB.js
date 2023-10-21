const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const os = require('os');

function createMongoDatabase() {
	const dbPath = 'notification_mongoDB';
	const port = 6003; // MongoDB default port

	// Check if the folder already exists
	if (!fs.existsSync(dbPath)) {
		// If it doesn't exist, create it
		fs.mkdirSync(dbPath);
		console.log(`Folder '${dbPath}' created successfully.`);
	} else {
		console.log(`Folder '${dbPath}' already exists.`);
	}

	// Determine if the platform contains "win" (works for both 32-bit and 64-bit Windows)
	const isWindows = os.platform().includes('win');

	// Construct the mongod command based on the operating system
	let command;
	if (isWindows) {
		command = `mongod --port ${port} --dbpath "${dbPath}"`;
	} else {
		command = `mongod --port ${port} --dbpath ${dbPath}`;
	}

	const child = exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error}`);
		} else {
			console.log(`MongoDB server is running on port ${port} with data path: ${dbPath}`);
		}

		if (stderr) {
			console.error(`stderr: ${stderr}`);
		}
	});

	child.on('exit', (code) => {
		console.log(`Child process exited with code ${code}`);
	});
}

module.exports = {
	createMongoDatabase
}
