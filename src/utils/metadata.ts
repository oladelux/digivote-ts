import { PageType } from "../types/PageType";

export const getPageMetadata = (page: PageType) => {
  const landingPageMetaData = {
    title: "Home | Digivote - Explore new ways to VOTE",
  };

  const createBallotMetaData = {
    title: "Create Ballot | Digivote - Explore new ways to VOTE",
  };

  const voteMetaData = {
    title: "Vote | Digivote - Explore new ways to VOTE",
  };

  const dashboardMetaData = {
    title: "Dashboard | Digivote - Explore new ways to VOTE",
  };

  return {
    LANDING_PAGE: landingPageMetaData,
    CREATE_BALLOT: createBallotMetaData,
    VOTE: voteMetaData,
    DASHBOARD: dashboardMetaData,
  }[page];
};
