import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { fetchRepoList } from "../../store/reducers/gitDetailSlice";
import FormSection from "../common/FormSection";
import NoDataFound from "../common/NoDataFound";
import Paginate from "../common/Pagination";
import RepoRowComponent from "./RepoRowComponent";

const GitRepoComponent = () => {
  const [state, setState] = useState({
    user: "",
  });
  const disptach = useDispatch();
  const gitState = useSelector((state) => state.gitDetails);

  const onSubmit = (data) => {
    const { user } = data;
    disptach(fetchRepoList({ user }));
    setState({
      user,
    });
  };

  const handlePageChange = (event, pageNumber) => {
    disptach(fetchRepoList({ user: state.user, pageNumber }));
  };

  return (
    <>
      <FormSection onSubmit={onSubmit} fieldName="user" label="Search Repo" />
      {gitState.repoStatus === "loading" && (
        <div data-testid="loading-test-id">loading....</div>
      )}
      {gitState.repoStatus === "succeeded" && gitState.repos.length > 0 && (
        <div data-testid="repo-wrapper-test-id">
          <Grid container spacing={2}>
            {gitState.repos.map((repo, index) => {
              return <RepoRowComponent key={index} repo={repo} />;
            })}
          </Grid>
          <Paginate
            paginate={gitState.paginate}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {gitState.repoStatus === "failed" && <NoDataFound />}
    </>
  );
};

export default GitRepoComponent;
