import React, { useEffect, useState, lazy, Suspense } from "react";
import {fetchPost} from "../Global/globalFunctions";
const PostsCard = lazy(() => import("../Components/PostsCard"));

const HomePage = () => {
  const [allPosts, setAllPost] = useState([]);
  useEffect(() => {
    fetchPost("",setAllPost)

  }, []);
  return (
    <div>
      <div className="flex justify-evenly item-center flex-wrap">
        {allPosts.length > 0 ? (
          allPosts.map((data) => {
            return (
              <Suspense fallback={<h1 className=" p-10 bg-blue-200 text-center m-5">Loading...</h1>} key={data.id}>
                <PostsCard data={data}  setAllPost={setAllPost}/>
              </Suspense>
            );
          })
        ) : (
          <p>No Post Added Yet</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
