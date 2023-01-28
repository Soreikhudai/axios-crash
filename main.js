const posts = [
    {title : 'Post one', createdAt: new Date().getTime()}
];
let intervalId=0;
function getPosts(){
clearInterval(intervalId)
intervalId = setInterval(() =>{
let output='';
posts.forEach((post)=>{
    output+= `<li>${post.title} updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`
})
document.body.innerHTML=output;
}, 1000);
};


 async function createPost(post){
    let promise1= await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt: new Date().getTime()})
                }, 1000);
                const error=false;
                if(!error){
                    resolve();
                }else{
                    reject('Error: somethiong went wrong')
                }
    })
    return promise1;
}






async function create3rdPost(post){
    const promise2=await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt: new Date().getTime()})
                }, 2000);
                const error=false;
                if(!error){
                    resolve()
                }else{
                    reject('Error: something went wrong')
                }
    })
    return promise2;

}

async function create4thPost(post){
    const promise3= await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt: new Date().getTime()})
                }, 3000);
                const error=false;
                if(!error){
                    resolve();
                }else{
                    reject('Error: somethiong went wrong')
                }
    })
    return promise3;
}

async function deletePost(){
 const promise4= await new Promise((resolve, reject)=>{
        setTimeout(()=>{
         if(posts.length>0){
            resolve(posts.pop())
         }else{
            reject("array is empty now")
         }
        }, 4000)
    })
    return promise4;
}

const user={
        username: "sorei",
        lastActivityTime: "2nd of august"

    }

async function updateLastActivityTime(){
    const promise5= await new Promise((resolve, reject)=>{
         setTimeout(()=>{
             user.lastActivityTime=new Date().getTime()
             resolve(user.lastActivityTime)
             }, 1000);
     })
     return promise5;
 }
 
 Promise.all([getPosts(),
 createPost({title: 'post two', createdAt: new Date().getTime()}), 
 create3rdPost({title: 'post three', createdAt: new Date().getTime()}), 
 create4thPost({title: 'post four', createdAt: new Date().getTime()}), 
 deletePost(), updateLastActivityTime()])
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{
                    getPosts
                    deletePost().then(()=>{
                        getPosts()
                        deletePost().catch(err=> console.log(err))
                    }).catch(err=> console.log(err))
                }).catch(err=> console.log(err))
            }).catch(err=> console.log(err))
        }).catch(err=> console.log(err))
    }).catch(err=> console.log(err))
}).catch(err=> console.log(err))
