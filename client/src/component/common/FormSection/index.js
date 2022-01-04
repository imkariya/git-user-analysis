import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";

const FormSection = (props) => {
  const { onSubmit, fieldName, label } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={!!errors[fieldName]}
          helperText={!!errors[fieldName] && "This field is required"}
          id="outlined-basic"
          label={label}
          variant="outlined"
          type="text"
          placeholder="Search here"
          size="small"
          {...register(fieldName, { required: true })}
          // inputProps={{data-testid={`${fieldName}-test-id`}}}
        />
        <Button
          variant="outlined"
          // size="large"
          color="primary"
          data-testid="submit-test-id"
          type="submit"
          className="submit-button"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default FormSection;
