var x=0;
var y=0;
var ssw=0;
var ssv=0;
first={source:'hokage.png',sw:42,sh:42};
const c= document.getElementById('canvas1');
const area=c.getContext('2d');
class Chapter{
    constructor(_chapternum){
        const player=new Image();
        player.src=eval(_chapternum).source;
        player.onload=function(){
            area.drawImage(player,ssw,ssv,eval(_chapternum).sw,eval(_chapternum).sh,x,y,42,42)
        }
    }

    flip() {
    const img = new Image();
    img.src = first.source;
    img.onload = function () {
        area.clearRect(0, 0, c.width, c.height);
        area.save();
        area.scale(-1, 1);
        area.drawImage(img, ssw, ssv, first.sw, first.sh, -x - 42, y, 42, 42);
        area.restore();
    };
}

}
var doit=new Chapter('first');
function down(){
    if (y<=100){
    ssv=0;
    y=y+10;
    area.clearRect(0, 0, c.width, c.height);
    var doit=new Chapter('first');
    }
}
function up(){
    if(y>=0){
        ssv=80;
        y=y-10;
        area.clearRect(0, 0, c.width, c.height);
        var doit=new Chapter('first');
    }
}
function left(){
    if(x>=0){
        x=x-10;
        ssv=42;
        area.clearRect(0, 0, c.width, c.height);
        var doit=new Chapter('first');
    }
}
function right() {
    if (x <=260) {
        ssv = 42;

        x = x + 10;
        area.clearRect(0, 0, c.width, c.height);
        var doit = new Chapter('first');
        doit.flip();


    }
}
document.getElementById('up').addEventListener('mousedown',up)
document.getElementById('down').addEventListener('mousedown',down)
document.getElementById('left').addEventListener('mousedown',left)
document.getElementById('right').addEventListener('mousedown',right)
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            up();
            break;
        case 'ArrowDown':
            down();
            break;
        case 'ArrowLeft':
            left();
            break;
        case 'ArrowRight':
            right();
            break;
    }
});
if (event.key.startsWith('Arrow')) {
    event.preventDefault();
}