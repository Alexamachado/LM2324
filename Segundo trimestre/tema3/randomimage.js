/*
imagen = new Array();
        
                imagen[0] = ['images/1.png'],
                imagen[1] = ['images/2.png'],
                imagen[2] = ['images/3.png'],
                imagen[3] = ['images/4.png'],
                imagen[4] = ['images/5.png'],
                imagen[5] = ['images/6.png'],
                imagen[6] = ['images/7.png'];
*/       
        
                function getRandomArbitrary(min, max){
                    return Math.random() * (max - min) + min;
                }
                   
                    
                    var n = parseInt(getRandomArbitrary(1,7));
                    
                    //document.write(imagen[n]);
            
                    //function pls(){
                        element = document.getElementById("photos");
                        element.src="images/1.png";
                    //}

                