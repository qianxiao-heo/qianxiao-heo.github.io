function modeSet(){
    if(document.cookie.replace(/(?:(?:^|.*;s*)nights*=s*([^;]*).*$)|^.*$/, "$1") === ''){
        var nowMode = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        if(nowMode === "dark"){
            document.body.classList.add('night');
            document.cookie = "night=1;path=/";
        }else{
            document.body.classList.remove('night');
            document.cookie = "night=0;path=/";
        }
    }else{
        var night = document.cookie.replace(/(?:(?:^|.*;s*)nights*=s*([^;]*).*$)|^.*$/, "$1") || '0';
        if(night == '0'){
            document.body.classList.remove('night');
        }else if(night == '1'){
            document.body.classList.add('night');
        }
    }
};
modeSet();

function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
	if(night == '1'){
        document.body.classList.remove('night');
		document.cookie = "night=0;path=/";
	}
	else if(night == "0"){
        document.body.classList.add('night');
		document.cookie = "night=1;path=/";
	}
};

function randomLi() {
    const ulElements = document.querySelectorAll("ul.rand-mask");
    ulElements.forEach(ulElement => {
        const liElements = ulElement.getElementsByTagName("li");
        for (let i = 0; i < liElements.length; i++) {
            let randomValue = Math.floor(Math.random() * 100) + 1;
            let data = randomPost();
            const starLink = liElements[i].querySelector("a.star");
            const postLink = liElements[i].querySelector("a.post");
            const postSpan = postLink.querySelector("span");
            starLink.href = data[1].url;
            postLink.href = data[1].url;
            postSpan.textContent = data[0].title;
            if(i == liElements.length - 1){
                while(randomValue > 20 &  randomValue < 55){
                    randomValue = Math.floor(Math.random() * 100) + 1;
                }
            }
            liElements[i].style.setProperty("--star-top", randomValue);
        }
    });
  };
  randomLi();

function isHome(){
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        document.body.setAttribute("id", "home");
    } else {
        document.body.setAttribute("id", "not-home");
    }
};
isHome();

document.addEventListener('pjax:success', function() {
    modeSet();
    randomLi();
    isHome();
});