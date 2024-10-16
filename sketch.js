const num = 6;
const particle = Array(num);

const p_color = Array(num);
const p_pos = Array(num);
const isParticle = Array(num);
const p_charge = Array(num);
const coulomb_constant = 8987551787;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(500,-400,500);

  for(let i = 0; i < num; i++){
    particle[i] = new Particle(i);
  }

} 

function draw() {
  background("#f1f1f1");
  stroke(180,180,180,100);
  strokeWeight(0.3);
  
  PARAMS.vectorr[0] = vector_r_i(PARAMS.origin_particle_index)[PARAMS.target_particle_index].x;
  PARAMS.vectorr[1] = vector_r_i(PARAMS.origin_particle_index)[PARAMS.target_particle_index].y;
  PARAMS.vectorr[2] = vector_r_i(PARAMS.origin_particle_index)[PARAMS.target_particle_index].z;
  PARAMS.vectorr[3] = sqrt(pow(PARAMS.vectorr[0], 2) + pow(PARAMS.vectorr[1], 2) + pow(PARAMS.vectorr[2], 2));
  PARAMS.vectorr[4] = PARAMS.vectorr[0] / PARAMS.vectorr[3];
  PARAMS.vectorr[5] = PARAMS.vectorr[1] / PARAMS.vectorr[3];
  PARAMS.vectorr[6] = PARAMS.vectorr[2] / PARAMS.vectorr[3];

  PARAMS.results[0] = coulomb_constant * ((PARAMS.p_charge[PARAMS.origin_particle_index] * PARAMS.p_charge[PARAMS.target_particle_index]) / pow(PARAMS.vectorr[3], 2)) * PARAMS.vectorr[4];
  PARAMS.results[1] = coulomb_constant * ((PARAMS.p_charge[PARAMS.origin_particle_index] * PARAMS.p_charge[PARAMS.target_particle_index]) / pow(PARAMS.vectorr[3], 2)) * PARAMS.vectorr[5];
  PARAMS.results[2] = coulomb_constant * ((PARAMS.p_charge[PARAMS.origin_particle_index] * PARAMS.p_charge[PARAMS.target_particle_index]) / pow(PARAMS.vectorr[3], 2)) * PARAMS.vectorr[6];
  PARAMS.results[3] = sqrt(pow(PARAMS.results[0], 2) + pow(PARAMS.results[1], 2) + pow(PARAMS.results[2], 2));
  PARAMS.results[4] = coulomb_constant * (PARAMS.p_charge[PARAMS.origin_particle_index] / pow(PARAMS.vectorr[3], 2));

if(PARAMS.lights_on==true){
  lights();
  directionalLight(255,255,200,-200,1500,-300)
}

  for(let i = 0; i < 40; i++){
    line(-2000, 0, -50*i, 2000, 0, -50*i);
    line(-2000, 0, 50*i, 2000,0,  50*i);

    line(50*i, 0, 2000, 50*i, 0, -2000);
    line(-50*i, 0, 2000, -50*i, 0, -2000);
  }
  line(-2000, 0, 2000,0);
  line(0, -2000, 0, 2000);
  line(0, 0, -2000, 0, 0, 2000);

  if(PARAMS.orthographic_view==true){
   ortho();
  }

  noStroke();
  if (mouseX <= width - (20+screen.width/7.5)){
  orbitControl();
}

for(let i = 0; i< num; i++){
 particle[i].show();
}
  stroke("#999999");
  //line(PARAMS.P1_Pos.x * 50, PARAMS.P1_Pos.y * 50 * -1, PARAMS.P1_Pos.z * 50 * -1, PARAMS.P2_Pos.x * 50, PARAMS.P2_Pos.y * 50 * -1, PARAMS.P2_Pos.z * 50 * -1)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}