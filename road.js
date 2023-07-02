class Road{
  constructor(x, width, laneCount=3){
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;
    
    this.left = x-width/2;
    this.right = x+width/2;
    
    const infinity = 500; // 1000000 //->org value
    this.top = -infinity;
    this.bottom = infinity;
  }
  getLaneCenter(laneIndex){
    if(laneIndex>= this.laneCount){
      throw new Error(`bcz laneIndex=${laneIndex} >= laneCount=${this.laneCount}`)
    }
    const laneWidth = this.width/this.laneCount;
    return this.left + laneWidth/2 + laneIndex*laneWidth;
  }
  
  
  draw(ctx){
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    
    for(let i=0; i<=this.laneCount; i++){
      const x = lerp(
        this.left,
        this.right,
        i/this.laneCount,     // value <=1 always
        
      );
      
      if(i>0 && i<this.laneCount){
        ctx.setLineDash([20, 20]);
      }else{
        ctx.setLineDash([]);  //means here [0,0]
      }
      
      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }
  }
}