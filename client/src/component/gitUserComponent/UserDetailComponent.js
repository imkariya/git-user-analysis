import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import "./userdetail.css";

const UserDetailComponent = (props) => {
  const { user } = props;
  const date = new Date(user.member_since);
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Card
          data-testid="user-profile-test-id"
          variant="outlined"
          className="user-detail-card"
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <a
              href={user.profile_url}
              target="_blank"
              rel="noreferrer"
              className="image-link"
            >
              <img
                className="avatar"
                src={user.image}
                alt={user.name}
                width="50px"
                height="50px"
              />
            </a>
            <CardContent className="mb-4 mt-3">
              {user.name}
              <Box className="date">{date.toLocaleDateString()}</Box>
            </CardContent>
          </Box>
          <CardContent className="border-top p-2">
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span>Follower: {user.follower}</span>
              </div>
              <div>
                <span>Following: {user.following}</span>
              </div>
              <div>
                <span>Total Repo: {user.repo_count}</span>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default UserDetailComponent;
