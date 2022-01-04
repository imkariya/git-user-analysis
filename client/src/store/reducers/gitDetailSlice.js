import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserRoute, getRepoRoute } from "../../api/apiRouteHelper";
import client from "../../api";

const initialState = {
  user: {},
  repos: [],
  userErrors: false,
  repoErrors: false,
  paginate: {
    perPage: 10,
    pageNumber: 1,
    totalPages: 1,
  },
};

export const fetchUserDetail = createAsyncThunk(
  "git/fetchUserDetail",
  async (user) => {
    const route = getUserRoute(user);
    const response = await client(route);
    return response.data;
  }
);

export const fetchRepoList = createAsyncThunk(
  "git/fetchRepoList",
  async (data) => {
    const { user } = data;
    const pageNumber = data.pageNumber || 1;
    const route = getRepoRoute(user, pageNumber);
    const response = await client(route);
    return response.data;
  }
);

export const gitDetailSlice = createSlice({
  name: "gitDetailSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserDetail.pending]: (state) => {
      state.userStatus = "loading";
    },
    [fetchUserDetail.fulfilled]: (state, action) => {
      state.userStatus = "succeeded";
      state.user = action.payload.user;
    },
    [fetchUserDetail.rejected]: (state, action) => {
      state.userStatus = "failed";
      state.userErrors = action.payload;
    },

    [fetchRepoList.pending]: (state) => {
      state.repoStatus = "loading";
    },
    [fetchRepoList.fulfilled]: (state, action) => {
      state.repoStatus = "succeeded";
      const { repos, ...paginate } = action.payload;
      state.repos = repos;
      paginate.page = parseInt(paginate.page);
      paginate.pageNumber = parseInt(paginate.pageNumber);
      state.paginate = paginate;
    },
    [fetchRepoList.rejected]: (state, action) => {
      state.repoStatus = "failed";
      state.repoErrors = action.payload;
    },
  },
});

export default gitDetailSlice.reducer;
