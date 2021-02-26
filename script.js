setInterval(() => {
 time=new Date();
 htime=time.getHours();
 mtime=time.getMinutes();
 stime=time.getSeconds();

 hrotation=30*htime+mtime/2;
 mrotation=6*mtime;
srotation=6*stime;

hour.style.tranform=`rotate(${hrotation}deg)`;
minute.style.tranform=`rotate(${mrotation}deg)`;
second.style.tranform=`rotate(${srotation}deg)`;
}, 1000);