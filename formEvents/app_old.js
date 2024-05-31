const tweetform=document.querySelector('#Tweet-Form')
tweetform.addEventListener('submit',function(Event)
{
    Event.preventDefault();
    let username=document.querySelector('#username');
    let tweet=document.querySelector('#tweet');
    addTweet(username.value,tweet.value);
    username.value='';
    tweet.value='';                                                                                                                                                                                                                                                                                  
})
addTweet=(username,tweet) => {
    const ul=document.querySelector('#tweets');
    const li=document.createElement('li');
    const boldusername=document.createElement('b');
    boldusername.append(username);
    li.append(boldusername);
    li.append(` - ${tweet}`);
    ul.append(li);

}