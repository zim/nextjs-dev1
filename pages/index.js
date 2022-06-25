import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import teams from "../data/en.1.clubs.json";

import { getSortedPostsData } from "../lib/posts";
// import { getLeagueData } from "../lib/league";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	// const allLeagueData = getLeagueData();
	// console.log(teams.clubs);
	// teamsData = teams.clubs;
	return {
		props: {
			allPostsData,
			// teamsData,
		},
	};
}

export default function Home({ allPostsData, teams }) {
	console.log(allPostsData);
	console.log(teams);
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			{/* Add this <section> tag below the existing <section> tag */}
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
