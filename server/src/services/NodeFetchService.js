import fetch from 'node-fetch';

const nodeFetchGet = async (url) => {
    try {
        const response = await fetch(url);
        let res = false;
        if (response.status === 200 || response.status === '200') {
            res = await response.json();
        }
        return res;
    } catch (err) {
        return err;
    }
};

export default nodeFetchGet;
