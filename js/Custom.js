( function(){  
    var sliderNext = document.getElementById("slider_next");
    var sliderPrev = document.getElementById("slider_prev");
    var Slider = document.getElementById("slider");

    Slider.children[0].style = "display: block";
    Slider.children[1].style = "display: none";
    Slider.children[2].style = "display: none";

    var flag = 1;

    function Auto(){

        switch(flag)
        {
            case 0:
                flag=1;
                Slider.children[0].style = "display: block";
                Slider.children[1].style = "display: none";
                Slider.children[2].style = "display: none";
                break;
            case 1:
                flag=2;
                Slider.children[1].style = "display: block";
                Slider.children[0].style = "display: none";
                Slider.children[2].style = "display: none";
                break;
            case 2:
                flag=0;
                Slider.children[2].style = "display: block";
                Slider.children[1].style = "display: none";
                Slider.children[0].style = "display: none";
                break;
        }
    }


    sliderPrev.onclick = ()=>{
        switch(flag)
        {
            case 0:
                flag=2;
                Slider.children[0].style = "display: block";
                Slider.children[1].style = "display: none";
                Slider.children[2].style = "display: none";
                break;
            case 1:
                flag=0;
                Slider.children[1].style = "display: block";
                Slider.children[0].style = "display: none";
                Slider.children[2].style = "display: none";
                break;
            case 2:
                flag=1;
                Slider.children[2].style = "display: block";
                Slider.children[1].style = "display: none";
                Slider.children[0].style = "display: none";
                break;
        }
    }
    sliderNext.onclick = Auto;


    //Cambio de imagenes automatico

    setInterval(Auto,6000)


}());