import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import { getAllTeamIds } from "../../lib/teams";

console.log(getAllTeamIds());

export async function getStaticProps({ params }) {
	const postData = getTeamData(params.team);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllTeamIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
		</Layout>
	);
}
