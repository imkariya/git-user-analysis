import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";
import "./gitrepo.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RepoRowComponent = ({ repo }) => {
  const { name, description, owner_name, repo_url, stars } = repo;
  return (
    <>
      <Grid item xs={4}>
        <Item>
          <>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span className="card-heading">Name:</span> &nbsp;
                <span className="reponame ">{name}</span>
              </div>
              <div>
                <span className="text-dark">{stars}</span>
              </div>
            </Box>
            <div className="repo_desc">
              <Box className="card-heading">Description: &nbsp;</Box>

              <span className="description">{description || "N/A"}</span>
            </div>
            <div>
              <div className="reponame">
                <span className="card-heading">Owner Name: &nbsp;</span>

                <span>{owner_name}</span>
              </div>
              <div className="reponame">
                <a href={repo_url} target="_blank" rel="noreferrer">
                  Visit Repo
                </a>
              </div>
            </div>
          </>
        </Item>
      </Grid>
      {/* <Card className="my-3 pb-3" variant="outlined">
        <Box className="repo-wrapper">
          <div className="d-flex align-items-start justify-content-between p-3 border-bottom">
            <div>
              <span className="card-heading">Name:</span> &nbsp;
              <span className="reponame ">{name}</span>
            </div>
            <div>
              <i className="fa fa-star"></i>
              <span className="text-dark">{stars}</span>
            </div>
          </div>
          <div className="repo_desc p-3">
            <span className="card-heading">Description: &nbsp;</span>

            <span className="description">{description || "N/A"}</span>
          </div>
          <div className="d-flex align-items-start justify-content-between px-3">
            <div className="reponame">
              <span className="card-heading">Owner Name: &nbsp;</span>

              <span>{owner_name}</span>
            </div>
            <div className="reponame">
              <a href={repo_url} target="_blank" rel="noreferrer">
                Visit Repo
              </a>
            </div>
          </div>
        </Box>
      </Card> */}
    </>
  );
};

export default RepoRowComponent;
