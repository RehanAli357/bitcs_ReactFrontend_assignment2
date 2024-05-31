import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditDeleteButton from "./EditDeleteButton";
import { useNavigate } from "react-router-dom";
// import VisibilityIcon from "@mui/icons-material/Visibility";
const PostsCard = ({ data }) => {

const navigate = useNavigate();  
  const showPost = (id) => {
    navigate(`/post/${id}`);
  };

  
  return (
    <Card sx={{ maxWidth: 345 }} className="m-5">
      {/* <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        // image={data.imageUrl}
        title="blog image"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.blogTitle}
        </Typography>
        <Typography
  variant="body2"
  color="text.primary"
  onClick={() => { showPost(data.id); }}
  className="cursor-pointer"
  sx={{ color: 'blue' }}
>
  {data.blogDescription.slice(0, 45)}...
</Typography>

        <Typography color="text.secondary">By {data.authorName} ~</Typography>
      </CardContent>
      <CardActions>
        <EditDeleteButton id={data.id}/>
      </CardActions>
    </Card>
  );
};

export default PostsCard;
