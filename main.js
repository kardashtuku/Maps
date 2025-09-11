function ZoomImage()
{
    if(zoom === false)
    {
        zoom = true
        document.getElementById("map").style.width = "100%";
    }
    else
    {
        zoom = false
        document.getElementById("map").style.width = "50%";
    }
    
}
function SwitchImage(direction)
{
    if(direction == 0)
    {
        i--;
    }
    else if(direction == 1)
    {
        i++;
    }
    if(i==-1)
    {
        i=0
    }
    if(i==6)
    {
        i=5
    }
    document.getElementById("map").src = "Images/"+images[i]+".png"
}
let i = 0;
const images = ["Elizabeth","HarrisonGreater","HarrisonGreaterEMPTY","MesaCompleteCounties","MesaEmpty","SouthernIndiana"];
let zoom = false;