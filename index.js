var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
            switch (buttonInnerHTML){
                case "w":
                var audio = new Audio("1.mp4");
                audio.play(); 
                break;

                case "a":
                var audio = new Audio("2.mp4");
                audio.play(); 
                break; 

                case "s":
                var audio = new Audio("3.mp4");
                audio.play(); 
                break; 

                case "d":
                var audio = new Audio("4.mp3");
                audio.play(); 
                break;

                case "j":
                var audio = new Audio("1.mp4");
                audio.play(); 
                break; 

                

               

                default:console.log(buttonInnerHtml);
            }
        
       
    });

}
