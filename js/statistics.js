function get51LAData(){
    fetch("https://v6-widget.51.la/v6/K2Eb7ZLEqGqG2GRB/quote.js").then(res=> res.text()).then(data=>{
      let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g);
      num = num.map(el => {
        let val = el.replace(/(<\/span><span>)/g, "");
        let str = val.replace(/(<\/span><\/p>)/g, "");
        return str;
      });
      let now = document.getElementById('home-now-fw');
      let yesterday = document.getElementById('home-yesterday-fw');
      let month = document.getElementById('home-month-fw');
      now.innerText= num[2];
      yesterday.innerText = num[4]; 
      month.innerText = num[5];
      let totality = num[6];//总访问数
      let paddedNumber=totality.padStart(9,"0");//补位
      let hotnum = document.getElementById('hotnum');
      let iCount= hotnum.querySelectorAll("#hotnum i");
      if(iCount.length >= 9){
        for(let i = 0;i < iCount.length; i++){
          iCount[i].remove();
        }
      }
      for (let i = 0; i < paddedNumber.length; i++) {
        let digit = paddedNumber.charAt(i);
        let iTag = document.createElement("i");
        iTag.classList.add("text-effect");
        iTag.innerText = digit;
        hotnum.appendChild(iTag);
      }     
    }).catch(error=>{
      console.log("51LA Error",error)
    })
}
get51LAData()