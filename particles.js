class Particle {
    constructor(index) {
        this.ind=index;
    }
    show() {
        //square(this.position.x,this.position.y,10)
        if(PARAMS.isParticle[this.ind]==true){
        push();
            translate(PARAMS.p_pos[this.ind].x*50, PARAMS.p_pos[this.ind].z*50*-1, PARAMS.p_pos[this.ind].y*50*-1);
        fill(PARAMS.p_color[this.ind]);
            sphere(this.radius = 8 + PARAMS.p_charge[this.ind] * .5);
        pop();
        }
    }
};