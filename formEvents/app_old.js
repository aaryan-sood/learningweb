const tweetform=document.querySelector('#tweetForm');
tweetform.addEventListener('submit',function(Event){
    Event.preventDefault();
    let username=tweetform.elements.username;
    let tweet=tweetform.elements.tweet;
    addTweet(username.value,tweet.value);
    username.value='';
    tweet.value='';
})
addTweet=(username,tweet) => {
    let tweetcontainer=document.querySelector('#tweets');
    const li=document.createElement('li');
    const boldusername=document.createElement('b');
    boldusername.append(username);

    li.append(boldusername);
    li.append(`-${tweet}`);
    tweetcontainer.append(li);
}