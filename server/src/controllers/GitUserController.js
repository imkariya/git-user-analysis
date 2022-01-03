import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import User from '../models/User';
import { retrieveGitUser, retrieveGitRepos } from '../services/GitAPIService';

const userDetail = async (req, res) => {
    try {
        const user = req.params.user.toLowerCase();
        let userProfile = await User.findOne({ name: user }).exec();
        if (!userProfile) {
            const body = await retrieveGitUser(user);
            if (body) {
                userProfile = await User.create({
                    name: body.login.toLowerCase(),
                    image: body.avatar_url,
                    follower: body.followers,
                    following: body.following,
                    repo_count: body.public_repos,
                    member_since: body.created_at,
                    profile_url: body.html_url,
                });
                res.status(StatusCodes.OK).json({ user: userProfile });
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    message: ReasonPhrases.BAD_REQUEST,
                });
            }
        } else {
            res.status(StatusCodes.OK).json({
                message: ReasonPhrases.OK,
                user: userProfile,
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

const repoLists = async (req, res) => {
    try {
        const user = req.params.user.toLowerCase();
        const pageNumber = req.query.pageNumber || 1;
        const perPage = req.query.perPage || 10;
        const userProfile = await retrieveGitUser(user);
        const repos = await retrieveGitRepos(user, pageNumber, perPage);
        if (repos && userProfile) {
            const mappedRepos = repos.map((repo) => ({
                name: repo.name.toLowerCase(),
                owner_name: repo.owner.login.toLowerCase(),
                stars: repo.stargazers_count,
                description: repo.description,
                repo_url: repo.html_url,
            }));
            const totalPages = Math.ceil(userProfile.public_repos / perPage);
            res.status(StatusCodes.OK).json({
                message: ReasonPhrases.OK,
                repos: mappedRepos,
                pageNumber,
                perPage,
                totalPages,
            });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: ReasonPhrases.BAD_REQUEST,
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
            error,
        });
    }
};

export { userDetail, repoLists };
