import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetail } from "../../store/reducers/gitDetailSlice";
import FormSection from "../common/FormSection";
import NoDataFound from "../common/NoDataFound";
import UserDetailComponent from "./UserDetailComponent";

const GitUserComponent = () => {
  const disptach = useDispatch();
  const gitState = useSelector((state) => state.gitDetails);

  const onSubmit = (data) => {
    disptach(fetchUserDetail(data.user));
  };

  return (
    <>
      <FormSection onSubmit={onSubmit} fieldName="user" label="Search User" />
      {gitState.userStatus === "loading" && (
        <div data-testid="loading-test-id">loading....</div>
      )}
      {gitState.userStatus === "succeeded" && (
        <UserDetailComponent user={gitState.user} />
      )}
      {gitState.userStatus === "failed" && <NoDataFound />}
    </>
  );
};

export default GitUserComponent;
