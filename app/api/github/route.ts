import { NextResponse } from "next/server";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  weeks: ContributionWeek[];
}

interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}

interface Repositories {
  totalCount: number;
}

interface GitHubUser {
  login: string;
  repositories: Repositories;
  contributionsCollection: ContributionsCollection;
}

interface GraphQLResponse {
  data: {
    user: GitHubUser;
  };
  errors?: { message: string }[];
}

export async function GET() {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  };

  const body = {
    query: `
      query {
        user(login: "ankitbareth-dev") {
          login
          repositories(first: 100, ownerAffiliations: OWNER) {
            totalCount
          }
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `,
  };

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data: GraphQLResponse = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error(data.errors[0].message);
    }

    const { user } = data.data;

    const formattedData = {
      login: user.login,
      public_repos: user.repositories.totalCount,
      contributions: user.contributionsCollection.contributionCalendar.weeks
        .flatMap((week) => week.contributionDays)
        .map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level:
            day.contributionCount === 0
              ? 0
              : day.contributionCount < 3
                ? 1
                : day.contributionCount < 6
                  ? 2
                  : day.contributionCount < 10
                    ? 3
                    : 4,
        })),
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
