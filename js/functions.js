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
function owoBig() {
    let flag = 1; // 设置节流阀
    let owo_time = ""; // 设置计时器
    let m = 3; // 设置放大倍数
    let div = document.createElement("div").id = "owo-big";
    let body = document.querySelector("body").appendChild(div);
    const emtion = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.target.classList && mutation.target.classList.value === "OwO-body") {
          let owo_body = mutation.target;
          owo_body.addEventListener("contextmenu", e => e.preventDefault());
          owo_body.addEventListener("mouseover", e => {
            if (e.target.tagName === "IMG" && flag) {
              flag = 0;
              owo_time = setTimeout(() => {
                let height = e.target.clientHeight * m;
                let width = e.target.clientWidth * m;
                let left = e.x - e.offsetX - (width - e.target.clientWidth) / 2;
                if (left + width > body.clientWidth) {
                  left -= left + width - body.clientWidth + 10;
                }
                if (left < 0) {
                  left = 10;
                }
                let top = e.y - e.offsetY;
                div.style.height = height + "px";
                div.style.width = width + "px";
                div.style.left = left + "px";
                div.style.top = top + "px";
                div.style.display = "flex";
                div.innerHTML = `<img src="${e.target.src}">`;
              }, 300);
            }
          })
          owo_body.addEventListener("mouseout", e => {
            div.style.display = "none";
            flag = 1;
            clearTimeout(owo_time);
          })
        }
      }
    })
    // 监听 DOM 变动
    emtion.observe(document.getElementById("post-comment"), {
      childList: true,
      subtree: true
    })
}