import { GIT_BASE_URL } from '../constants';
import nodeFetchGet from './NodeFetchService';

const retrieveGitUser = async (user) => {
    const data = nodeFetchGet(`${GIT_BASE_URL}/users/${user}`);
    return data;
};

const retrieveGitRepos = async (user, pageNumber, perPage) => {
    const data = nodeFetchGet(
        `${GIT_BASE_URL}/users/${user}/repos?page=${pageNumber}&per_page=${perPage}`
    );
    return data;
};

export { retrieveGitUser, retrieveGitRepos };
