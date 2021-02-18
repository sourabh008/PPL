const postData = require("./postsSchema");
module.exports = {
    post:(data)=>{
        return postData.create({ "username":data.username,"id":data.id,"image":data.image,"category":data.category,"description":data.description,"time":data.time,"date":data.date}).then((response)=>{
            // response.posts.push(obj);
            return response
         
    })

},
getPosts:(data)=>{
    return postData.find().then((res)=>{
        return res;
    })
}
}
