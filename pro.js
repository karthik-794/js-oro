var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="OIP.jfif";
        bulb=1;

    } 
    else{
          document.getElementById("image").src="otp.jpg";
          bulb=0;


        }
}