let randPostTitle=["Centos部署Hexo博客","Hexo文件下载标签外挂","GitHub Actions自动部署Hexo","连接Mysql数据库异常：Public Key Retrieval is not allowed","你也走了很远的路吧","浅谈ArrayList及扩容机制"];
           let randPostUrl=["posts/75e805a18234.html","posts/7b1b00f928aa.html","posts/c54d0cac81b1.html","posts/ae781e160f33.html","posts/f8e0c409da5f.html","posts/9e3212fbe23a.html"];
           const usedRandNum = [];
      function randomPost(){
        let randomNum;
        do {
          randomNum = Math.floor(Math.random() * 6);
        } while (usedRandNum.includes(randomNum));
        usedRandNum.push(randomNum);
        if (usedRandNum.length === 6) {
          usedRandNum.length = 0;
        }
        let dataArray = [{"title":randPostTitle[randomNum]},{"url":"/"+randPostUrl[randomNum]}];
        return dataArray;
    }