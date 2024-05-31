import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePost } from "../Global/global Functions";
import EditDeleteButton from "../Components/EditDeleteButton";
const PostPage = () => {
  const [post, setPost] = useState({
    blogTitle: "",
    blogDescription: "",
    authorName: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      fetchSinglePost(params.id, setPost);
    }
  }, [params.id]);
  return (
    <>
      {post ? (
        <div className="mt-2.5 mb-2.5 mx-auto bg-blue-300 p-4 rounded-lg w-full sm:w-[300px] md:w-[400px] lg:w-[500px] ">
          <h2 className=" text-2xl font-bold mb-2 bg-slate-50 p-2">
            {post?.blogTitle}
          </h2>
          <p className="mt-4 bg-blue-100 p-4 text-justify rounded-bl-lg rounded-br-lg">
            {post?.blogDescription}
          </p>
          <p className="mt-4">
            <i>by {post?.authorName} ~</i>
          </p>
          <div className="bg-blue-100">
            <EditDeleteButton id={params.id} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl mt-5">No Post Found so far</h1>
          <button
            className="bg-blue-500 w-fit text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:bg-blue-700 transition duration-150 ease-in-out mx-auto mt-4"
            onClick={() => {
              navigate("/home");
            }}
          >
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default PostPage;
