var ball_x,ball_y,ball_diameter,ball_dx,ball_dy;

var paddle_x,paddle_y,paddle_height,paddle_width,paddle_dx,paddle_dy

var block_width,block_height;

var array = []

var player_score = 0;

function setup() {
  createCanvas(400, 400);
  background("black");
  ball_x = width/2;
  ball_y = height/2;
  ball_diameter = 20;
  ball_dx = 3;
  ball_dy = 2;
  
  paddle_height = 20
  paddle_width = 60
  paddle_dx = 2
  paddle_x = (width/2)-(paddle_width/2);
  paddle_y = height-(paddle_height);
  
  block_width = 40
  block_height = 20
  block_x = 0
  block_y = 0
  
  circle(ball_x,ball_y,ball_diameter);
  rect(paddle_x,paddle_y,paddle_width,paddle_height);
  for(let i=0; i<11; i++){
    array.push([])
    for(let j = 0; j<8; j++){
      array[i].push(1);
    }
  }
}



function draw()
{
  
  background("black")
  fill(255)  
  let collided = false;
  for(i=0;i<11;i++){
    for(j=0;j<8;j++){
      
      if (array[i][j] === 1){
        rect(block_width*i, block_height*j, block_width, block_height)     
        if(!collided){
          let c1 = ball_y - (ball_diameter/2) <= (block_height*j + block_height);
          let c2 = ball_x + (ball_diameter/2) >= block_width*i;
          let c3 = ball_x -  (ball_diameter/2)<= (block_width*i + block_width);
          if(c1 && c2 && c3){
            collided = true
            ball_dy = -ball_dy
            player_score += 1
            array[i][j] = 0
          }
        }
      }
    }
  }
  
  
  
  circle(ball_x,ball_y,ball_diameter);
  rect(paddle_x,paddle_y,paddle_width,paddle_height);
  
  ball_x = ball_x + ball_dx;
  
  ball_y = ball_y + ball_dy;
  
  if (ball_x + (ball_diameter/2)>=width || (ball_x - (ball_diameter/2) <=0) ){
    ball_dx = -ball_dx
  }
  
  ball_bottom = ball_y + (ball_diameter/2)>=height 
  ball_upper = ball_y - (ball_diameter/2)<=0
  ball_paddle_vertical = (ball_y+(ball_diameter/2)>=(height-paddle_height))
  ball_paddle_horizontal = ((ball_x+(ball_diameter/2))>=paddle_x )&& ((ball_x - (ball_diameter/2))<=(paddle_x+paddle_width))
  
  
  if (ball_bottom || ball_upper || (ball_paddle_vertical && ball_paddle_horizontal)) {
    ball_dy = -ball_dy
  }
  
  if(keyIsDown(LEFT_ARROW)){
  paddle_x = paddle_x - paddle_dx
  }
  
  if(keyIsDown(RIGHT_ARROW)){
  paddle_x = paddle_x + paddle_dx
  }
  

  
  
  textSize(32);
  fill("red")
  text(`Score:${player_score}`,width-140,height-360)
  
  if (ball_y + ball_diameter/2 >= 400){
    ball_dx = 0;
    ball_dy = 0;
    text('Game OVER',width = 100,height = 200)
    noLoop()
  } 
  
  
}