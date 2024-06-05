import commonAxios from "../CommonAxios/commonAxios";

export const fetchPost = async(id,setPost) =>{
    if(id){
        commonAxios(`posts/${id}`,'GET',"").then((data)=>{
            return setPost(data.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }else{
        commonAxios(`posts/`,'GET',"").then((data)=>{
            return setPost(data.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}

export const updatePost = async(id,data,navigate)=>{
    commonAxios(`posts/${id}`,'PUT',data).then(()=>{
        navigate(`/post/${id}`);
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const deletePost = async (id)=>{
    commonAxios(`posts/${id}`,'DELETE').then(()=>{
    }).catch((err)=>{
        console.log(err.message)
    })
}


