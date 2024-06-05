import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost, fetchPost } from "../Global/globalFunctions";
import { useNavigate, useLocation } from "react-router-dom";

const EditDeleteButton = ({ id, setAllPost }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const editPostBtn = (id) => {
    navigate(`/post/edit/${id}`);
  };

  const deletePostBtn = async (id) => {
    if (!location.pathname.includes("/home")) {
      deletePost(id)
        .then(() => {
          navigate("/home");
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log("not");
    } else {
      deletePost(id, navigate)
        .then(() => {
          fetchPost("", setAllPost);
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log("here");
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          editPostBtn(id);
        }}
        size="small"
        sx={{ margin: "0.5rem" }}
      >
        <EditIcon /> Edit
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          deletePostBtn(id);
        }}
        size="small"
        sx={{ margin: "0.5rem" }}
      >
        <DeleteIcon /> Delete
      </Button>
    </>
  );
};

export default EditDeleteButton;
