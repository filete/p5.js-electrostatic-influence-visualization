function vector_r_i(index){
    this.index = index;

    var vectorr1_ = createVector(
        PARAMS.p_pos[0].x -PARAMS.p_pos[this.index].x,
        PARAMS.p_pos[0].y - PARAMS.p_pos[this.index].y,
        PARAMS.p_pos[0].z - PARAMS.p_pos[this.index].z
    );
    var vectorr2_ = createVector(
        PARAMS.p_pos[1].x - PARAMS.p_pos[this.index].x,
        PARAMS.p_pos[1].y - PARAMS.p_pos[this.index].y,
        PARAMS.p_pos[1].z - PARAMS.p_pos[this.index].z
    );
    var vectorr3_ = createVector(
        PARAMS.p_pos[2].x - PARAMS.p_pos[this.index].x,
        PARAMS.p_pos[2].y - PARAMS.p_pos[this.index].y,
        PARAMS.p_pos[2].z - PARAMS.p_pos[this.index].z
    );
    var vectorr4_ = createVector(
        PARAMS.p_pos[3].x - PARAMS.p_pos[this.index].x,
        PARAMS.p_pos[3].y - PARAMS.p_pos[this.index].y,
        PARAMS.p_pos[3].z - PARAMS.p_pos[this.index].z
    );
    var vectorr5_ = createVector(
        PARAMS.p_pos[4].x - PARAMS.p_pos[this.index].x,
        PARAMS.p_pos[4].y - PARAMS.p_pos[this.index].y,
        PARAMS.p_pos[4].z - PARAMS.p_pos[this.index].z
    );
    var vectorr6_ = createVector(
        PARAMS.p_pos[5].x - PARAMS.p_pos[this.index].x,
        PARAMS.p_pos[5].y - PARAMS.p_pos[this.index].y,
        PARAMS.p_pos[5].z - PARAMS.p_pos[this.index].z
    );
    return [vectorr1_,vectorr2_,vectorr3_,vectorr4_,vectorr5_,vectorr6_]
}
