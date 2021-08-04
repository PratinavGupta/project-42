

function setup() {
  createCanvas(600, 600)
  angleMode(DEGREES)
}

function draw() {
  background(0)
  translate(300, 300)
  rotate(-90)

  hr = hour()
  min = minute()
  sec = second()

  sang = map(sec, 0, 60, 0, 360)
  mang = map(min, 0, 60, 0, 360)
  hang = map(hr % 12, 0, 12, 0, 360)

  console.log(hr - 12, min, sec)

push()
rotate(sang)
stroke("red")
strokeWeight(7)
line(0,0,100,0) 
pop()

push()
rotate(mang)
stroke("yellow")
strokeWeight(7)
line(0,0,75,0) 
pop()


push()
rotate(hang)
stroke("white")
strokeWeight(7)
line(0,0,50,0) 
pop()

strokeWeight(10)
point(0,0)
noFill()
stroke("red")
arc(0,0,300,300,0,sang) 
stroke("yellow")
arc(0,0,270,270,0,mang) 
stroke("white")
arc(0,0,240,240,0,hang) 

  drawSprites()
}