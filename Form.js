class Form {

  constructor() {
     this.input = createInput("");
     this.input.style('background-color', 'white');
     this.input.style('border-color', 'yellow');
     this.input.size(270,20)
      this.button = createButton('Normal');
      this.button.size(120,30)
      this.button.style('background-color', 'aqua');
      this.button.style('border-color', 'blue');
      this.button2 = createButton('Hard');
      this.button2.size(120,30)
      this.button2.style('background-color', 'yellow');
      this.button2.style('border-color', 'blue');
      this.button4= createButton('PLAY')
      this.button4.size(120,30)
      this.button4.style('background-color', 'aqua');
      this.button4.style('border-color', 'blue');

      this.title = createElement('h1');
      this.title.style('color', 'red');
      this.Back = createButton('Back');
      this.Back.size(120,30)
      this.Back.style('background-color', 'aqua');
      this.Back.style('border-color', 'blue');

      this.Back2 = createButton('Back');
      this.Back2.size(120,30)
      this.Back2.style('background-color', 'aqua');
      this.Back2.style('border-color', 'blue');

      this.Back3 = createButton('Back');
      this.Back3.size(120,30)
      this.Back3.style('background-color', 'aqua');
      this.Back3.style('border-color', 'blue');

      this.button3 = createButton('Lets Go')
      this.button3.size(120,30)
      this.button3.style('background-color', 'aqua');
      this.button3.style('border-color', 'blue');

      this.greeting = createElement('h2');
      this.greeting.style('color', 'orange');
      this.greeting.style('font-family',"Copperplate Gothic Light")
      this.greeting2 = createElement('h2')
      this.greeting2.style('color', 'yellow');
      this.greeting2.style('font-family',"Copperplate Gothic Light")
      this.input.hide();
      this.Back.hide();
      this.Back2.hide();
      this.Back3.hide();
      this.button3.hide()
      this.button4.hide()
      this.title.hide();


    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
      this.button2.hide();
      this.button4.hide();
      this.button3.hide();
      this.greeting3.hide()
    }


    display(){
           
     

      
    
        this.title.html("PROG");
        this.title.position(windowWidth/2.45, displayHeight/8);
    
        this.input.position(windowWidth/3, displayHeight/4);
        this.button.position(windowWidth/2.5, displayHeight/4);
        this.button2.position(windowWidth/2.5, displayHeight/4+35);
        this.button3.position(windowWidth/2.5, displayHeight/4+30);
        this.button4.position(windowWidth/2.5, displayHeight/4+30);
 

        this.Back.position(windowWidth/2.5,windowHeight/20);
        this.Back2.position(windowWidth/2.5,windowHeight/34);
        this.Back3.position(windowWidth/2.5,windowHeight/3.5);
        this.button.mousePressed(()=>{
         // this.input.hide();
          this.button.hide();
          this.button2.hide();
          this.title.hide();
            //PLayer = this.input.value();
            button.play();
            rinning.loop()
          //this.greeting.html("Hello " + PLayer)
          //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          GameState = 2;
          this.Back2.show();
          Life1 = createSprite(1065,30,20,20)
          Life1.addImage("health",Life1Img)
          Life1.scale = 0.15
          Life1.visible = false
         
          Life2 = createSprite(1100,30,30,20)
          Life2.addImage("healt",Life2Img)
          Life2.scale = 0.15
          Life2.visible = false
         
          Life3 = createSprite(1135,30,30,20)
          Life3.addImage("heal",Life3Img)
          Life3.scale = 0.15
          Life3.visible = false 
  

        });



        this.button2.mousePressed(()=>{
          // this.input.hide();
           this.button.hide();
           this.button2.hide();
           this.title.hide();
           this.Back.show();
           this.button3.show();
          
         
           this.input.show();
           button.play();
          

           
         });
   
      

          this.button3.mousePressed(()=>{
          this.input.hide();
          this.button3.hide();
          player3 = this.input.value();
          this.greeting.html(player3)
          this.greeting2.html("Hello  "    + player3 +    "    Welcome To")
          this.greeting.position(windowWidth/28, displayHeight/50);
          this.greeting2.position(windowWidth/3.3, displayHeight/13)
          this.greeting.show()
          this.greeting2.show();

     
          Case = createSprite(140,56)
          Case.addImage("iMAGE",CaseImg)
          Case.scale = 0.8
          Case.visible = true
          this.button4.show();          
    
         });
           


  
         this.Back.mousePressed(()=>{

            this.input.hide();
            this.button.show();
            this.button2.show();
            this.button3.hide();
            this.title.hide();
            this.Back.hide();
      
            this.greeting.hide();
            this.greeting2.hide();
            this.button4.hide()
            this.greeting3.hide()
            this.input2.hide()

            Case.visible = false
            trailnp.x = -100;
            trail.x = -30;
         });





         this.button4.mousePressed(()=>{
    
          rinning.loop()
          this.button4.hide();
  
         
          this.greeting.hide();
          this.greeting2.hide()
          Case.visible = false
           GameState = 4
           
           Life1 = createSprite(1065,30,20,20)
           Life1.addImage("health",Life1Img)
           Life1.scale = 0.15
           Life1.visible = false
          
           Life2 = createSprite(1100,30,30,20)
           Life2.addImage("healt",Life2Img)
           Life2.scale = 0.15
           Life2.visible = false
          
           Life3 = createSprite(1135,30,30,20)
           Life3.addImage("heal",Life3Img)
           Life3.scale = 0.15
           Life3.visible = false 
   
         })




      
      this.Back.mousePressed(()=>{
   
        this.input.hide();
        this.button.show();
        this.button2.show();
        this.button3.hide();
        this.title.hide();
        this.Back.hide();

        this.greeting.hide();
        this.greeting2.hide();
        this.button4.hide()
        
   
 
        Case.visible = false;
        GameState = 1
        
        rinning.pause()
        GroundGroup.destroyEach()
        EnemyGroup2.destroyEach()
        EnemyGroup.destroyEach()
        speedGroup.destroyEach()
        jumpGroup.destroyEach()
        fullGroup.destroyEach()
        GroundGroup.destroyEach()
        buildingGroup.destroyEach()
        FlygroundGroup.destroyEach()
        score = 0
        Health = 3
        jumpState = 1
        speedState = 1
        Life1.destroy();
  
        Life2.destroy();
       
        Life3.destroy();

        trailnp.x = -100;
        trail.x = -30;
     });

     this.Back2.mousePressed(()=>{
   
     
      this.button.show();
      this.button2.show();

      this.title.hide();
      this.Back2.hide();

      
 


      GameState = 1
    
      rinning.pause()
      GroundGroup.destroyEach()
      EnemyGroup2.destroyEach()
      EnemyGroup.destroyEach()
      speedGroup.destroyEach()
      jumpGroup.destroyEach()
      fullGroup.destroyEach()
      GroundGroup.destroyEach()
      buildingGroup.destroyEach()
      FlygroundGroup.destroyEach()
      score = 0
      Health = 3
      jumpState = 1
      speedState = 1
      Life1.destroy();
  
      Life2.destroy();
     
      Life3.destroy();

      trailnp.x = -100;
      trail.x = -30;
   });



  if(GameState === 5){
   this.Back3.show();
   this.Back2.hide();
   this.Back.hide();

  }

  if(GameState === 6){
    this.Back3.show();
    this.Back2.hide();
    this.Back.hide();
 
   }
   
  this.Back3.mousePressed(()=>{
   
     
    this.button.show();
    this.button2.show();

    this.title.hide();
    this.Back.hide();
    this.Back2.hide();
    this.Back3.hide();
    



    GameState = 1
  
    rinning.pause()
    GroundGroup.destroyEach()
    EnemyGroup2.destroyEach()
    EnemyGroup.destroyEach()
    speedGroup.destroyEach()
    jumpGroup.destroyEach()
    fullGroup.destroyEach()
    GroundGroup.destroyEach()
    buildingGroup.destroyEach()
    FlygroundGroup.destroyEach()
    score = 0
    Health = 3
    jumpState = 1
    speedState = 1
    Life1.destroy();

    Life2.destroy();
   
    Life3.destroy();
    trailnp.x = -100;
    trail.x = -30;
 });




  
    }
  
  
  
  
  
  }
