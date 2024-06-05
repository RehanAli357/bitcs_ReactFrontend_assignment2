import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../Global/globalFunctions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const EditPost = () => {
  const params = useParams();
  const [post, setPost] = useState({
    blogTitle: "",
    blogDescription: "",
    authorName: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setPost((pdata) => ({
      ...pdata,
      [name]: value,
    }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!post.blogTitle) newErrors.blogTitle = "Post title is required";
    if (post.blogDescription.length < 20)
      newErrors.blogDescription = "Description is required";
    if (!post.authorName) newErrors.authorName = "Author name is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      updatePost(params.id, post, navigate);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id, setPost);
    }
  }, [params.id]);

  return (
    <>
      {post ? (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate={true}
              autoComplete="off"
            >
              <div className="flex justify-center items-center flex-col mt-5">
                <TextField
                  error={!!errors.blogTitle}
                  id="outlined-error"
                  label="Post Title"
                  name="blogTitle"
                  value={post.blogTitle}
                  onChange={handleChange}
                  helperText={errors.blogTitle}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  error={!!errors.blogDescription}
                  id="outlined-multiline-static"
                  label="Post description"
                  multiline
                  rows={10}
                  InputLabelProps={{ shrink: true }}
                  helperText={errors.blogDescription}
                  value={post.blogDescription}
                  name="blogDescription"
                  onChange={handleChange}
                />

                <TextField
                  error={!!errors.authorName}
                  id="outlined-error"
                  label="Author Name"
                  name="authorName"
                  InputLabelProps={{ shrink: true }}
                  value={post.authorName}
                  helperText={errors.authorName}
                  onChange={handleChange}
                />
              </div>
            </Box>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      ) : (
        "No Such Post found"
      )}
    </>
  );
};

export default EditPost;
