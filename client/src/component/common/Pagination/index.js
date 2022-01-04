import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paginate = (props) => {
  const classes = useStyles();
  const { paginate, handlePageChange } = props;
  const { pageNumber, totalPages } = paginate;

  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Paginate;
