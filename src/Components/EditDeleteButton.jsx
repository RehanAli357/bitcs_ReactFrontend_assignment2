import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost } from "../Global/global Functions";
import { useNavigate } from "react-router-dom";

const EditDeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const editPostBtn = (id) => {
    navigate(`/post/edit/${id}`);
  };

  const deletePostBtn = (id) => {
    deletePost(id,navigate);
    // Implement delete functionality here
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          editPostBtn(id);
        }}
        size="small"
        sx={{ margin: '0.5rem' }} // Add margin here
      >
        <EditIcon /> Edit
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          deletePostBtn(id);
        }}
        size="small"
        sx={{ margin: '0.5rem' }} // Add margin here
      >
        <DeleteIcon /> Delete
      </Button>
    </>
  );
};

export default EditDeleteButton;
