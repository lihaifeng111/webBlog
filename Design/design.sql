create table user(
  id int(6) primary key auto_increment,
  username varchar(18) unique,
  password varchar(10) ,
  email varchar(18),
  level int(6),
  picture varchar(12)
)auto_increment=1001;

select * from user
delete from user where id=1006;
drop table user

insert into user(username,password,email,level) value('admin','123456','123@qq.com',3);
insert into user(username,password,email,level) value('lhf1','123456','456@qq.com',2);
insert into user(username,password,email,level) value('lhf2','123456','789@qq.com',2);


drop table article

create table article(
  id int(6) primary key auto_increment,
  articleName varchar(50) unique,
  title varchar(20),
  text text,
  userId int(6),
  picture varchar(12),
  time DateTime
)auto_increment=1001;

select * from article

delete from article where id=1004;

create table comment(
    id int(6) primary key auto_increment,
    userName varchar(18),
    time DateTime,
    articleId int(6),
    content text 
)auto_increment=1001;

select * from comment

drop table comment

create table message(
   id int(6) primary key auto_increment,
   userName varchar(18),
   content text,
   time DateTime
)auto_increment=1001;

drop table message
select * from message
