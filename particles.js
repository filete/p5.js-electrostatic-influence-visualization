class Particle {
    constructor(index) {
        this.index=index;
    }
    show() {
        //square(this.position.x,this.position.y,10)
        if(PARAMS.isParticle[this.index]==true){
        push();
            translate(PARAMS.p_pos[this.index].x*50, PARAMS.p_pos[this.index].z*50*-1, PARAMS.p_pos[this.index].y*50*-1);
        fill(PARAMS.p_color[this.index]);
            sphere(this.radius = 8 + PARAMS.p_charge[this.index] * .5);
        pop();
        }
    }
};