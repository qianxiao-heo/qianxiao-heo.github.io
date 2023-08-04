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

function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
	if(night == '0'){
		document.body.classList.add('night');
		document.cookie = "night=1;path=/"
	}
	else {
		document.body.classList.remove('night');
		document.cookie = "night=0;path=/"
	}
} 

function randomLi() {
    const ulElements = document.querySelectorAll("ul.rand-mask");
    ulElements.forEach(ulElement => {
        const liElements = ulElement.getElementsByTagName("li");
        for (let i = 0; i < liElements.length; i++) {
            let randomValue = Math.floor(Math.random() * 100) + 1;
            let data = randomPost();
            const starLink = liElements[i].querySelector("a.star");
            const postLink = liElements[i].querySelector("a.post"); // 获取当前li元素下的a标签
            const postSpan = postLink.querySelector("span"); //获取a标签下的span元素 
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
}
randomLi()

function makeMulti(data){
    let str = String(data);
    return str.substring(str.indexOf("/*") + 3, str.lastIndexOf("*/"));
}
let information = function () {
    /*           _____                    _____                    _____                _____                    _____                    _____          
         /\    \                  /\    \                  /\    \              |\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\____\             |:\____\                /::\    \                /::\____\        
       /:::/    /               /::::\    \              /::::|   |             |::|   |               /::::\    \              /::::|   |        
      /:::/    /               /::::::\    \            /:::::|   |             |::|   |              /::::::\    \            /:::::|   |        
     /:::/    /               /:::/\:::\    \          /::::::|   |             |::|   |             /:::/\:::\    \          /::::::|   |        
    /:::/____/               /:::/__\:::\    \        /:::/|::|   |             |::|   |            /:::/__\:::\    \        /:::/|::|   |        
   /::::\    \              /::::\   \:::\    \      /:::/ |::|   |             |::|   |           /::::\   \:::\    \      /:::/ |::|   |        
  /::::::\    \   _____    /::::::\   \:::\    \    /:::/  |::|   | _____       |::|___|______    /::::::\   \:::\    \    /:::/  |::|   | _____  
 /:::/\:::\    \ /\    \  /:::/\:::\   \:::\    \  /:::/   |::|   |/\    \      /::::::::\    \  /:::/\:::\   \:::\    \  /:::/   |::|   |/\    \ 
/:::/  \:::\    /::\____\/:::/  \:::\   \:::\____\/:: /    |::|   /::\____\    /::::::::::\____\/:::/  \:::\   \:::\____\/:: /    |::|   /::\____\
\::/    \:::\  /:::/    /\::/    \:::\  /:::/    /\::/    /|::|  /:::/    /   /:::/~~~~/~~      \::/    \:::\  /:::/    /\::/    /|::|  /:::/    /
 \/____/ \:::\/:::/    /  \/____/ \:::\/:::/    /  \/____/ |::| /:::/    /   /:::/    /          \/____/ \:::\/:::/    /  \/____/ |::| /:::/    / 
          \::::::/    /            \::::::/    /           |::|/:::/    /   /:::/    /                    \::::::/    /           |::|/:::/    /  
           \::::/    /              \::::/    /            |::::::/    /   /:::/    /                      \::::/    /            |::::::/    /   
           /:::/    /               /:::/    /             |:::::/    /    \::/    /                       /:::/    /             |:::::/    /    
          /:::/    /               /:::/    /              |::::/    /      \/____/                       /:::/    /              |::::/    /     
         /:::/    /               /:::/    /               /:::/    /                                    /:::/    /               /:::/    /      
        /:::/    /               /:::/    /               /:::/    /                                    /:::/    /               /:::/    /       
        \::/    /                \::/    /                \::/    /                                     \::/    /                \::/    /        
         \/____/                  \/____/                  \/____/                                       \/____/                  \/____/         
                                                                                                                                                   @Auth提供技术支持*/
}
console.log(makeMulti(information))

document.addEventListener('pjax:success', function() {
    randomLi();
});