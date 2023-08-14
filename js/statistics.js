function get51LAData(){
    fetch('https://v6-widget.51.la/v6/K2Eb7ZLEqGqG2GRB/quote.js').then(res => res.text()).then((data) => {
      let title = ['最近活跃访客', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
      let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
      let order = [2, 4, 5]
      for (let i = 0; i < order.length; i++) { 
        document.querySelectorAll('.web')[0].innerHTML += '<li><h6>' + title[order[i]] + '</h6><em class="num" title="访问人数">' + num[order[i]] + '</em></li>'
      }
    });
    twikoo.getRecentComments({
      accessToken: '7398c1659496edf1e83fbee4217a4664',
      envId: 'https://twikoo.qiaoxiao.top',
      pageSize: 10,
      includeReply: false
    }).then(function (res) {
      let homeCounts = document.getElementById('home-comment-count');
      homeCounts.innerText = res.length;
    }).catch(function (err) {
      console.log("\n %c Comments Fail","color:red",err);
    })
};
get51LAData();

function createTextEffect(elementSelector, textClass, animationDuration, animationDelay) {
  const textElement = document.querySelector(elementSelector);
  const textContent = textElement.textContent;
  const characters = textContent.split('');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        textElement.innerHTML = '';
        for (let i = 0; i < characters.length; i++) {
          const character = characters[i];
          const characterElement = document.createElement('i');
          const characterTextNode = document.createTextNode(character);
          characterElement.appendChild(characterTextNode);
          characterElement.classList.add(textClass);
          characterElement.style.animationDuration = animationDuration;
          characterElement.style.animationDelay = `${i * animationDelay}s`;
          textElement.appendChild(characterElement);
        }
        observer.disconnect();
      }
    });
  });
  observer.observe(textElement);
};
createTextEffect('#thanks', 'text-effect', '1s', 0.1);
createTextEffect('#hotnum', 'text-effect', '1s', 0.1);