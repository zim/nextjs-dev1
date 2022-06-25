export async function getLeagueData() {
	// Instead of the file system,
	// fetch post data from an external API endpoint
	const res = await fetch(
		"https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
	);
	console.log(res.json());
	return res.json();
}
