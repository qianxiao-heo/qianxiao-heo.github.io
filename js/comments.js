function addScrollEvent(selector, li) {
	const cl = document.querySelector(selector);
	const prevBtn = cl.querySelector('.prev');
	const nextBtn = cl.querySelector('.next');
	const ul = cl.querySelector('.no-scrollbar');
	// const liWidth = ul.querySelector(li).offsetWidth;
	prevBtn.addEventListener('click', () => {
		ul.scrollBy({left: -30, behavior: 'smooth'});
	});
	nextBtn.addEventListener('click', () => {
		ul.scrollBy({left: 30, behavior: 'smooth'});
	});
}

function getTwikooComments(){
    twikoo.getRecentComments({
        accessToken: '7398c1659496edf1e83fbee4217a4664',
        envId: 'https://twikoo.qiaoxiao.top', // 环境 ID
        pageSize: 10,
        includeReply: false
      }).then(function (res) {
        console.log("\n %c Comments Successful：","background: #409EFF;color: rgb(255,255,255);border-radius:5px 0 0 5px;padding:5px 0 5px 10px;",btoa(res));
        let comments = document.getElementById('twikoo-comments-list');
        let homeCounts = document.getElementById('home-comment-count');
        homeCounts.innerText = res.length;
        for(let i =0 ; i < res.length; i++){
            let a = document.createElement('a');
            a.setAttribute('class', 'comments-box');
            a.setAttribute('href', res[i].url+"#"+res[i].id);
            a.setAttribute('role', "button");
            let divAuthor = document.createElement('div');
            divAuthor.setAttribute('class', 'author');
            let avatar = document.createElement('img');
            avatar.setAttribute('src', res[i].avatar);
            avatar.setAttribute('class', 'avatar');
            avatar.setAttribute('loading', 'lazy');
            avatar.setAttribute('decoding', 'async');
            let commentInfo = document.createElement('div');
            commentInfo.setAttribute('class', 'comment-info');
            let divEmpty = document.createElement('div');
            divEmpty.innerText=res[i].nick;
            let time = document.createElement('time');
            time.setAttribute('class', 'font-small');
            time.innerText = res[i].relativeTime;
            let commentText = document.createElement('div');
            commentText.setAttribute('class', 'comment-text');
            let spanContent = document.createElement('span');
            spanContent.setAttribute('class', 'content');
            spanContent.innerText = res[i].commentText;
            commentInfo.appendChild(divEmpty);
            commentInfo.appendChild(time);
            divAuthor.appendChild(avatar);
            divAuthor.appendChild(commentInfo);
            commentText.appendChild(spanContent);
            a.appendChild(divAuthor);
            a.appendChild(commentText);
            comments.appendChild(a);
        }
      }).catch(function (err) {
        console.error("\n %c Comments Fail","color:red",err);
        const sec=document.getElementById("twikoo-comments");
        sec.style.display="none";
    });
    addScrollEvent('.comments', 'a');
}
getTwikooComments()

document.addEventListener('pjax:success', function() {
  if (location.pathname === '/') {
    get51LAData();
    getTwikooComments()
  }
});