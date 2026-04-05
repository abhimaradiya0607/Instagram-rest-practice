const express=require('express');
const app=express();
const path=require('path');

const PORT = process.env.PORT || 8080;
const port=8080;

const { v4 : uuidv4 } =require('uuid');
var methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(methodOverride('_method'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

let posts=[
    {
            id: uuidv4(),
            username: 'abhi',
            imageUrl: 'https://picsum.photos/id/8/400/300',
            caption: 'Exploring MERN stack today!',
            likes: 10,
            createdAt: new Date()
    },
    {
        id: uuidv4(),
        username: 'om',
        imageUrl: 'https://picsum.photos/id/20/400/300',
        caption: 'Heyyy what a good dayyy',
        likes: 2,
        createdAt: new Date()
    },
    {
    id: uuidv4(),
    username: 'jeel',
    imageUrl: 'https://picsum.photos/id/31/400/300',
    caption: 'LPG crisis is an absoulte choas',
    likes: 3,
    createdAt: new Date()
    }
]

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts})
})

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs',{posts})
})

app.post('/posts',(req,res)=>{
    let likes=Math.floor(Math.random()*5);
    let {username,imageId,caption}=req.body;
    let imageUrl = `https://picsum.photos/id/${imageId}/400/300`;
    let id=uuidv4();
    posts.unshift({likes,id,username,imageUrl,caption});
    res.redirect('/posts')
})

app.get('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    if(!post){
        return res.send("Post not found ❌");
    }else{
    res.render('show.ejs',{post,posts})
    }
})

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (!post) {
        return res.send("Post not found ❌");
    }
    let { imageId, caption } = req.body;
    post.imageUrl = `https://picsum.photos/id/${imageId}/400/300`;
    post.caption = caption;
    console.log("PATCH request successful ✅");
    res.redirect('/posts');
});

app.get('/posts/:id/edit',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render('edit.ejs',{post});
})

app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect('/posts')
})

app.listen(port,()=>{
    console.log('Server working well on the port');
})