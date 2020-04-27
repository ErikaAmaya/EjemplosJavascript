
//const blogs= [
    //matriz de objetos
   // {title:'why mac & cheese rules', likes: 30},
   // {title:'10 things to make with marmite', likes: 50}
//];

//console.log(blogs);
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'chetumal',
    blogs:[
        {title:'why mac & cheese rules', likes: 30},
    {title:'10 things to make with marmite', likes: 50}
    ],
    login(){
        console.log('the user logged in');
    },

    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        //registrar diferentes blogs en la consola
        //para esto necesitamos acceder a esta función 
        console.log('this user has written the following blogs');
        
    
            //se refiere a este objeto de usuario
            //this es un objeto de contexto
            this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
            
        });

    }
      
};

user.logBlogs();