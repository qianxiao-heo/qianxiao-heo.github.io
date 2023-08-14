let randPostTitle=["Centos部署Hexo博客","GitHub Actions自动部署Hexo","Hexo文件下载标签外挂","连接Mysql数据库异常：Public Key Retrieval is not allowed","Redis基础（笔记一）","Redis持久化-AOF日志","Redis持久化-RDB快照","浅谈ArrayList及扩容机制","你也走了很远的路吧","键入网址到网页显示过程"];
           let randPostUrl=["posts/75e805a18234.html","posts/c54d0cac81b1.html","posts/7b1b00f928aa.html","posts/ae781e160f33.html","posts/d96330b44608.html","posts/16c43aaf84db.html","posts/90b5d2a4ea88.html","posts/9e3212fbe23a.html","posts/f8e0c409da5f.html","posts/fa8751623ed3.html"];
           const usedRandNum = [];
      function randomPost(){
        let randomNum;
        do {
          randomNum = Math.floor(Math.random() * 10);
        } while (usedRandNum.includes(randomNum));
        usedRandNum.push(randomNum);
        if (usedRandNum.length === 10) {
          usedRandNum.length = 0;
        }
        let dataArray = [{"title":randPostTitle[randomNum]},{"url":"/"+randPostUrl[randomNum]}];
        return dataArray;
    }