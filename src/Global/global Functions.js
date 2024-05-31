import commonAxios from "../CommonAxios/commonAxios";

const fetchPosts = async(setAllPost)=>{
    commonAxios('posts','GET',"").then((data)=>{
        setAllPost(data.data)
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const fetchSinglePost = async(id,setPost) =>{
    commonAxios(`posts/${id}`,'GET',"").then((data)=>{
        return setPost(data.data)
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const updatePost = async(id,data,navigate)=>{
    commonAxios(`posts/${id}`,'PUT',data).then(()=>{
        navigate(`/post/${id}`);
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const deletePost = async (id,navigate)=>{
    commonAxios(`posts/${id}`,'DELETE').then(()=>{
        navigate('/home')
    }).catch((err)=>{
        console.log(err.message)
    })
}

export default fetchPosts;

