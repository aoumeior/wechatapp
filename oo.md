## 相关地址

[git](https://github.com/aoumeior/wechatapp)
[小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
[wepy](https://tencent.github.io/wepy/document.html)

## web-app 功能

|     页面     |                           地址                          |    备注   |
| :----------- | :-----------------------------------------------------: | --------: |
| web主页 |         https://www.unitools.site/ytcc/index.jsp        |           |
| 图片地址展示 |  https://www.unitools.site/ytcc/app/common/gallery.jsp  |           |
| 图片上传展示 | https://www.unitools.site/ytcc/app/common/imgupload.jsp | 最大为10m |


## 需求配置

> 获取数据 www.unitools.site/ytcc/app/view/data?viewid=XXX&param=XXX,传入viewid


|       需求       |                                 view                                |           参数           |
| :--------------- | :-----------------------------------------------------------------: | -----------------------: |
| 获取文章列表     |     https://www.unitools.site/ytcc/app/view/data?viewid=xcx-list    |                       id |
| 获取轮播列表     |    https://www.unitools.site/ytcc/app/view/data?viewid=xcx-piclb    |                          |
| 获取背景图片     |     https://www.unitools.site/ytcc/app/view/data?viewid=xcx-bg1     |                          |
| 获取公司信息     |   https://www.unitools.site/ytcc/app/view/data?viewid=xcx-company   |                          |
| 获取合作公司信息 | https://www.unitools.site/ytcc/app/view/data?viewid=xcx-cooperation | company_id(用于过滤公司) |
| 图片上传         |               https://www.unitools.site/ytcc/uploadimg              |                     file |


## 数据库创建

```sql
create table t_article(
  id varchar(64) primary key,
	occur_time timestamp not null,
	title varchar(200) not null,
	content text not null
)
```

## sql配置

```sql
##select * from label where 1 = 1
#{exist{|} $Q[label_name] {|} and label_name = '$Q[label_name]'}#
```


## url

viewdata: `http://localhost:8081/ytcc/app/view/data?viewid=xcy-list&pageIndex=1&pageSize=2`

clearcache: `http://localhost:8081/ytcc/app/clearcache`


## sql编写

sql编写路径: `/usr/local/apache-tomcat-8.5.24/webapps/ytcc/WEB-INF/classes/config/sql/ytcc-view-sqlList.xml`


## 数据库插入请求

```sql
insert into t_pic values(replace(uuid(), '-', ''), 'http://www.unitools.site/ytcc/static/pic/bg_gyyt.jpg', SYSDATE(), 'bg')
```
