interface Router {
  api: string;
  socialJoin: string;
}

const API = "/";

/* 인증 관련 API */
const SOCIAL_JOIN = "/SocialJoin";

const routes: Router = {
  api: API,
  socialJoin: SOCIAL_JOIN
};

export default routes;
