let topbar = document.getElementById('topbar');
let main = document.getElementById('main');

for (let i = 0; i < data.topbar.length; i++) {
    let topbarDiv = document.createElement('div');
    let topbarA = document.createElement('a');

    topbarA.href = data.topbar[i].link;
    topbarA.innerHTML = data.topbar[i].name;

    topbarDiv.append(topbarA);
    topbar.append(topbarDiv);
}

function addText(text, addend) {
    let p = document.createElement('p');
    p.innerHTML = text;
    addend.append(p);
}

function addSection(section) {
    let sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';

    let sectionH1 = document.createElement('h1');
    sectionH1.innerHTML = section.title;
    sectionDiv.append(sectionH1);

    for (let i = 0; i < section.main.length; i++) {
        addText(section.main[i], sectionDiv);
    }

    main.append(sectionDiv);
}

for (let i = 0; i < data.main.length; i++) {
    switch (typeof data.main[i]) {
        case 'string':
            addText(data.main[i], main);
            main.append(document.createElement('br'));
            break;
        case 'function':
            data.main[i]();
            break;
    }
}
