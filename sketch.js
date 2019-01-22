/*Base functions - setup runs once, draw is continuous*/
let img1;
let img2; 
let img3;

function preload(){
    img1 = loadImage('images/skiing1.png');
    img2 = loadImage('images/snowflake2.png');
    img3 = loadImage('images/cloud.png');
}

function setup(){
    createCanvas(800, 800);
    //image(img3, mouseX, 35, img3.width/5, img3.height/5);
}

function draw(){
    background(87, 165, 198);
    imageMode(CENTER);
    //image(myCloud, mouseX, mouseY);
    for(var i=0; i< 10; i++){
        image(img3, mouseX + 250*i, 35, img3.width/5, img3.height/5);
        image(img3, mouseX - 250*i, 35, img3.width/5, img3.height/5);
    }
    //image(img3, mouseX, 35, img3.width/5, img3.height/5);

    if(mouseIsPressed){
        image(img2, mouseX, mouseY, img2.width/15, img2.height/15);
    }

    if(mouseX <= 360){
        fill(213, 232, 242);
    }
    else{
        fill(191, 210, 220);
    }
    noStroke();
    triangle(200, 800, 540, 800, 360, 320);
    if(mouseX <= 650){
        fill(215, 231, 239);
    }
    else{
        fill(235, 251, 259);
    }
    //fill(215, 231, 239);
    noStroke();
    triangle(490, 800, 800, 800, 650, 390);
    if(mouseX <= 470){
        fill(192, 208, 216);
    }
    else{
        fill(212, 228, 236);
    }
    //fill(192, 208, 216);
    noStroke();
    triangle(310, 800, 630, 800, 470, 490);
    if(mouseX <= 150){
        fill(217, 229, 235);
    }
    else{
        fill(257, 269, 275);
    }
    //fill(237, 249, 255);
    noStroke();
    triangle(0, 800, 320, 800, 150, 400);
    
    //any afdsnjklg
    rotate(radians(20));
    image(img1, 420, 500, img1.width/5, img1.height/5);
}