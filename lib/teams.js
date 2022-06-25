import teams from "../data/en.1.clubs.json";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

console.log(teams.clubs);

export function getSortedTeamsData() {
	// Get file names under /posts
	// const fileNames = fs.readdirSync(postsDirectory);
	// const allPostsData = fileNames.map((fileName) => {
	// 	// Remove ".md" from file name to get id
	// 	const id = fileName.replace(/\.md$/, "");

	// 	// Read markdown file as string
	// 	const fullPath = path.join(postsDirectory, fileName);
	// 	const fileContents = fs.readFileSync(fullPath, "utf8");

	// 	// Use gray-matter to parse the post metadata section
	// 	const matterResult = matter(fileContents);

	console.log("teams =========");
	console.log(teams.clubs);

	const teamNames = teams.clubs;

	const allTeamsData = teamNames.map((team) => {
		console.log(team);

		const id = team.code;

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, team.name);
		// const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		// const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			team,
			...team.name,
		};
	});

	// Sort posts by date
	// return allTeamsData.sort(({ date: a }, { date: b }) => {
	// 	if (a < b) {
	// 		return 1;
	// 	} else if (a > b) {
	// 		return -1;
	// 	} else {
	// 		return 0;
	// 	}
	// });
	return allTeamsData;
}

export function getAllTeamIds() {
	const teamNames = teams;
	console.log(teamNames);

	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]
	return teamNames.map((teamName) => {
		return {
			params: {
				team: teamName,
			},
		};
	});
}

export function getTeamData(team) {
	const fullPath = path.join(postsDirectory, `${team}.md`);
	// const fileContents = fs.readFileSync(fullPath, "utf8");
	// // Use gray-matter to parse the post metadata section
	// const matterResult = matter(fileContents);
	// // Combine the data with the id
	return {
		team,
		...matterResult.data,
	};
}
