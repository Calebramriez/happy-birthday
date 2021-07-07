var canvas=new fabric.Canvas('myCanvas');
player_x=1;
player_y=1;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("Birthday_candles.jeg",function(Img){
        player_object=Img;
        player_object.scaleToWidth(1000);
        player_object.scaleToHeight(600);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    } );
}
