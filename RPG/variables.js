var x=0;
var y=0;
first={source:'hokage.png',sw:42,sh:42};
const c= document.getElementById('canvas1');
const area=c.getContext('2d');
class Chapter{
    constructor(_chapternum){
        const player=new Image();
        player.src=eval(_chapternum).source;
        player.onload=function(){
            area.drawImage(player,0,0,eval(_chapternum).sw,eval(_chapternum).sh,x,y,42,42)
        }
    }
}
var doit=new Chapter('first');
function down(){
    if (y<=100){
    y=y+10;
    area.clearRect(0, 0, c.width, c.height);
    var doit=new Chapter('first');
    }
}
function up(){
    if(y>=-10){
        y=y-10;
        area.clearRect(0, 0, c.width, c.height);
        var doit=new Chapter('first');
    }
    if (document.getElementById('down').)
}
document.getElementById('up').addEventListener('mousedown',up)
document.getElementById('down').addEventListener('mousedown',down)