/* eslint-disable no-undef */
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import request from 'supertest';
import server from '../src/index';
import User from '../src/models/User';

describe('Test fetch user API', () => {
    it('It will fetch user detail from git node || response 200', async () => {
        jest.setTimeout(100 * 1000);
        let user;
        const username = 'node';

        await request(server)
            .get(`/api/v1/user-detail/${username}`)
            .expect(StatusCodes.OK)
            .then(async (response) => {
                const { body } = response;
                expect(Object.keys(body).includes('user')).toBeTruthy();
                const apiUser = body.user;
                user = await User.findOne({ name: username }).exec();
                expect(apiUser._id).toBe(user.id);
                expect(apiUser.name).toBe(user.name);
                expect(apiUser.image).toBe(user.image);
                expect(apiUser.follower).toBe(user.follower);
                expect(apiUser.following).toBe(user.following);
                expect(apiUser.repo_count).toBe(user.repo_count);
                expect(apiUser.member_since).toBe(
                    user.member_since.toISOString()
                );
            });
    });

    it('It will fetch user detail from git node!122 || response 400', async () => {
        const username = 'node!122';

        await request(server)
            .get(`/api/v1/user-detail/${username}`)
            .expect(StatusCodes.BAD_REQUEST)
            .then((response) => {
                const { body } = response;
                expect(Object.keys(body).includes('message')).toBeTruthy();
                expect(body.message).toBe(ReasonPhrases.BAD_REQUEST);
            });
    });
});

describe('Test fetch repos API', () => {
    it('It will fetch all the repos from node handle || Response 200', async () => {
        const handle = 'node';
        await request(server)
            .get(`/api/v1/repo-list/${handle}`)
            .expect(StatusCodes.OK)
            .then((response) => {
                const { body } = response;
                expect(Object.keys(body).includes('repos')).toBeTruthy();
                const { repos } = body;
                expect(Array.isArray(repos)).toBeTruthy();
                expect(repos.length).toBeTruthy();
                const expected = [
                    'owner_name',
                    'name',
                    'stars',
                    'description',
                    'repo_url',
                ];

                const currentKeys = Object.keys(repos[0]);
                expect(currentKeys).toEqual(expect.arrayContaining(expected));
            });
    });

    it('It will fetch all the repos from node!122 handle || Response 400', async () => {
        const handle = 'node!122';
        await request(server)
            .get(`/api/v1/repo-list/${handle}`)
            .expect(StatusCodes.BAD_REQUEST)
            .then((response) => {
                const { body } = response;
                expect(Object.keys(body).includes('message')).toBeTruthy();
                expect(body.message).toBe(ReasonPhrases.BAD_REQUEST);
            });
    });
});
