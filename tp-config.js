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

    isParticle: [
        true, true,
        false, false, false, false,
    ],

    p_charge: [
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
    ],

    vectorr: [
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
    ],
    vecr_axis: ['Vr x', 'Vr y', 'Vr z', '|r|',
        'VUr x', 'VUr y', 'VUr z',
    ],

    results: [
        0.0, 0.0, 0.0, 0.0,
        0.0,
    ],
    result_values: ['F x (N)', 'F y (N)', 'F z (N)', '|F| (N)',
        'E(q)   (N/C)',
    ],

    particle_index: 0,
    origin_particle_index: 0,
    target_particle_index: 1,
    orthographic_view: false,
    lights_on: false,
};

const pane = new Tweakpane.Pane();

const interface_params = pane.addFolder({
    title: "Interface",
    expanded: false,
});

interface_params.addInput(PARAMS, 'orthographic_view', { label: 'Orthographic view' });
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
        { title: 'Calculations (m)' },
    ]
});

result_tab.pages[0].addInput(PARAMS, 'origin_particle_index', {
    label: 'Origin:',
    options: {
        P1: 0, P2: 1, P3: 2,
        P4: 3, P5: 4, P6: 5,
    },
});
result_tab.pages[0].addInput(PARAMS, 'target_particle_index', {
    label: 'Target:',
    options: {
        P1: 0, P2: 1, P3: 2,
        P4: 3, P5: 4, P6: 5,
    },
});
for (let i = 0; i <PARAMS.results.length; i++) {
    result_tab.pages[0].addMonitor(PARAMS.results, i, {
        label: `${PARAMS.result_values[i]}`,
        format: (v) => v.toFixed(6),
        interval: 100,  // update every 100 milliseconds
    });
    if (i == 2 || i == 3) {
        result_tab.pages[0].addSeparator();
    }
}

result_tab.pages[1].addInput(PARAMS, 'origin_particle_index', {
    label: 'Origin:',
    options: {
        P1: 0, P2: 1, P3: 2,
        P4: 3, P5: 4, P6: 5,
    },
});
result_tab.pages[1].addInput(PARAMS, 'target_particle_index', {
    label: 'Target:',
    options: {
        P1: 0, P2: 1, P3: 2,
        P4: 3, P5: 4, P6: 5,
    },
});
for (let i = 0; i < 7; i++) {
    result_tab.pages[1].addMonitor(PARAMS.vectorr, i, {
        label: `${PARAMS.vecr_axis[i]}`,
        format: (v) => v.toFixed(6),
        interval: 100,  // update every 100 milliseconds
    });
    if (i == 2 || i ==3){
        result_tab.pages[1].addSeparator();
    }
}

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
    particle_tab.pages[0].addInput(PARAMS.p_pos, i, { label: `Pos P${i + 1}`, x: { step: 1.0 }, y: { step: 1.0 }, z: { step: 1.0 }, });
}
for (let i = 0; i < num; i++) {
    particle_tab.pages[1].addInput(PARAMS.p_charge, i, { label: `P${i + 1} (μC)` });
}
for (let i = 0; i < num + 1; i++) {
    particle_tab.pages[2].addInput(PARAMS.isParticle, i, { label: `P${i + 1}` });
}
pane.addSeparator();

