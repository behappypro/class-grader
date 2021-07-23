import axios from 'axios';

const url = 'api/posts/';

class PostService{
    // Get Posts
    // static för att slippa initiera post objekt
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        namn: post.namn,
                        moment: post.moment,
                        omdome: post.omdome,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }
    
    // Create Posts
    static insertPost(namn,moment,omdome){
        if(namn && moment && omdome > ''){
            return axios.post(url,{
                namn: namn,
                moment: moment,
                omdome: omdome
            });
        }
        else{
            console.log("Fel "+omdome);
        }    
    }

    // Delete Posts
    static deletePost(id){
        return axios.delete(url+'delete/'+id);
    }

    // Update Post
    static updatePost(namn,moment,omdome,id){
        axios.put(url+'update/'+id, {
            namn: namn,
            moment: moment,
            omdome: omdome
    })
        
    }

}

export default PostService;
