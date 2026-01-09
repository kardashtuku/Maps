function ZoomImage()
{
    if(zoom === false)
    {
        zoom = true
        document.getElementById("map").style.width = "200%";
    }
    else
    {
        zoom = false
        document.getElementById("map").style.width = "100%";
    }
    
}
function SwitchImage(direction)
{
    i+=direction;
    if(i==-1)
    {
        i=images.length-1
    }
    if(i==images.length)
    {
        i=0
    }
    document.getElementById("map").src = "Images/"+images[i]+".png"
}
let i = 0;
const images = ["Elizabeth","HarrisonGreater","HarrisonGreaterEMPTY","MesaCompleteCounties","MesaEmpty","SouthernIndiana","Federal","Dipamu","Kard","NimidiaFancy","Pee","RiverPlaceEmpty","StyledByethLabeled"];
let zoom = false;
