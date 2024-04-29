const tweetform=document.querySelector('#tweetform');
tweetform.addEventListener('submit',function(Event){
    Event.preventDefault();
    let username=tweetform.elements.username;
    let tweet=tweetform.elements.tweet;
    addTweet(username,tweet);
    // username.value='';
    // tweet.value='';
})
addTweet=(username,tweet) => {
    let tweetcontainer=document.querySelector('#tweets');
    const li=document.createElement('li');
    
}