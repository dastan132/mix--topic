const http = new easyHTTP;




// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err,posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
//     console.log(posts);

// });



// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
//     console.log(post);

// });


const data = {
    title: 'Custom post',
    body: 'This is a custom post',
    class: 'typo'
};


// http.post('https://jsonplaceholder.typicode.com/posts',data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });



http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    

});
