const num = 6;
const particle = Array(num);

const p_color = Array(num);
const p_pos = Array(num);
const isParticle = Array(num);
const p_charge = Array(num);
const coulomb_constant = 8987551787;

const pane = new Tweakpane.Pane();
const PARAMS = {
//Particle color
  p_color: [
  '#caa05a',
  '#ae6a47',
  '#8b4049',
  '#543344',
  '#515262',
  '#63787d',
  ],

  //Particle POSition
  p_pos: [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  ],
  orthogonal_view: false,
  lights_on: false,

  isParticle: [
    true,true,
    false,false,false, false,
  ],

  p_charge: [
    0.0,0.0,0.0,
    0.0,0.0,0.0,
  ],

  particle_index:0,

  mouseXPos: 0,
  };

const interface_params = pane.addFolder({
  title: "Interface",
  expanded: false,
  });
  interface_params.addInput(PARAMS, 'orthogonal_view', { label: 'Orthogonal view' });
  interface_params.addInput(PARAMS, 'lights_on', { label: 'Lights' });

const interface_colors = interface_params.addFolder({
  title: "Particle colors",
  expanded: false,
});

for (let i = 0; i < num; i++) {
  interface_colors.addInput(PARAMS.p_color, i, { label: `P${i + 1} Color` });
}

pane.addSeparator();

const result_folder = pane.addFolder({
  title: "Results",
  expanded: true,
});

const result_tab = result_folder.addTab({
  pages: [
    { title: 'Results' },
    { title: 'Calculations' },
  ]
});


result_tab.pages[0].addInput(PARAMS, 'particle_index', {
  label: 'Particle:',
  options: {
    P1: 0,
    P2: 1,
    P3: 2,
    P4: 3,
    P5: 4,
    P6: 5,
  },
});
result_tab.pages[1].addInput(PARAMS, 'particle_index', {
  label: 'Particle:',
  options: {
    P1: 0,
    P2: 1,
    P3: 2,
    P4: 3,
    P5: 4,
    P6: 5,
  },
});

pane.addSeparator();

const particle_folder = pane.addFolder({
  title: "Particles",
  expanded: true,
  });

const particle_tab = particle_folder.addTab({
  pages: [
    { title: 'Position' },
    { title: 'Charge μC' },
    { title: 'Particle' },
  ]
});
for (let i = 0; i < num; i++) {
  particle_tab.pages[0].addInput(PARAMS.p_pos,i,{ label: `Pos P${i + 1}`, x: {step: 1.0 },y:{step: 1.0},z:{step:1.0},});
}
for(let i = 0; i<num; i++){
  particle_tab.pages[1].addInput(PARAMS.p_charge, i, { label: `P${i + 1} (μC)` });
}

for(let i = 0; i< num+1; i++){
  particle_tab.pages[2].addInput(PARAMS.isParticle,i, { label: `P${i+1}` });
}

pane.addSeparator();

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(500,-400,500);

  for(let i = 0; i < num; i++){
    particle[i] = new Particle(i);
  }

  for(let i = 0; i<num; i++){
  result_tab.pages[1].addMonitor(PARAMS, 'particle_index', {
    label: `V r${i+1}`,
    interval: 100,  // update every 100 milliseconds
  });
}
} 

function draw() {
  background("#f1f1f1");
  stroke(180,180,180,100);
  strokeWeight(0.3);
  PARAMS.mouseXPos = mouseX;

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

  if(PARAMS.orthogonal_view==true){
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