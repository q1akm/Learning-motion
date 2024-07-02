import anime from "animejs";

const WaterDrop = () => {

  return (
    <div className="relative w-full pt-10  grid  h-screen justify-center">
        <DotGrid/>
    </div>
  )
}

const GRID_WIDTH = 15 ;
const GRID_HEIGHT = 20;

const DotGrid = () => {
    const handleDotClick = (e) => { 
        anime({
            targets: ".dot-point",
            scale: [
                {value:1.35, easing: "easeOutSine",duration: 250},
                {value:1, easing: "easeInOutQuad",duration: 500},
            ],
            translateY: [
                {value: -20, easing: "easeOutSine",duration: 250},
                {value:0, easing: "easeInOutQuad",duration: 500},
            ],
            opacity: [
                {value:1, easing: "easeOutSine",duration: 250},
                {value:0.5, easing: "easeInOutQuad",duration: 500},
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index,
            }),
        })
      };
      
    const dots = [];
    let index= 0;

    for (let i = 0;i < GRID_WIDTH; i++){
        for (let j = 0;j < GRID_HEIGHT; j++){
            dots.push (
                <div 
                onClick={handleDotClick}
                data-index = {index}
                key={`${i}-${j}`}
                className="group cursor-crosshair transition-colors ">
                    <div
                    data-index={index} 
                    className="dot-point h-3 w-6  bg-gradient-to-b from-white 
                    opacity-50 group-hover:from-slate-500 group-hover:to-white"/>
                </div>
            );
            index++;
        }
    }
    return (
    <div style={{gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)`}}
    className="w-fit grid">
        {dots}
    </div>
    )
};

export default WaterDrop;