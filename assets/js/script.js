const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')

function freshDot1(){
    this.obj = document.createElement("div");
    this.obj.classList.add("dot1");
    this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
    this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
    this.size = Math.floor(15 * Math.random()) + 7;
    this.obj.style.height =  this.size + 'px';
    this.obj.style.width = this.size + 'px';
    
    document.body.appendChild(this.obj);
  }
  var dot = [];
  for(var i = 0 ; i < 500 ; i++ ){
    dot.push(new freshDot1());
  }

function freshDot2(){
    this.obj = document.createElement("div");
    this.obj.classList.add("dot2");
    this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
    this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
    this.size = Math.floor(15 * Math.random()) + 7;
    this.obj.style.height =  this.size + 'px';
    this.obj.style.width = this.size + 'px';
    
    document.body.appendChild(this.obj);
  }
  var dot = [];
  for(var i = 0 ; i < 500 ; i++ ){
    dot.push(new freshDot2());
  }

function passOver1() {
      box1.classList.add('box_1')
      box2.classList.remove('box_1')
      box3.classList.remove('box_1')
  }

function passOver2() {
      box1.classList.remove('box_1')
      box2.classList.add('box_1')
      box3.classList.remove('box_1')
  }

function passOver3() {
    box1.classList.remove('box_1')
    box2.classList.remove('box_1')
    box3.classList.add('box_1')
  }

function passOut() {
    box1.classList.remove('box_1')
    box2.classList.remove('box_1')
    box3.classList.remove('box_1')
  }