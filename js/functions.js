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
