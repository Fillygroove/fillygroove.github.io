let data = {
    topbar: [{
        name: 'Bandcamp',
        link: 'https://fourequalsfive.bandcamp.com/'
    }, {
        name: 'Soundcloud',
        link: 'https://soundcloud.com/namenco'
    }],
    name: `Recent post: <a href="./?p=22-9-5">5th of September, 2022</a>`,
    main: [
        `I rushed this page out so that I could quickly link everything together, it won't look this bad for long I swear!!`,
        `Hello, I'm <span title="Fillygroove online, Sinetooth musically"><u>Clarise</u></span>! I'm a musician and a VERY ameture coder. I made this website as a sort of "hub" for my projects (even if it does look like crap). I'll try and update it regularly and make as many improvements as I can.`,
        () => {
			addSection({
                title: 'Ongoing Projects',
                main: [
                    `<a href="./metaventures">Metaventures</a> - A comic series made by Text Wall, Gramiatar, Fristo, SnapKrakPop, and myself.`,
                    `<a href="./tetris">Tetris</a> - A really buggy tetris clone.`,
                    `<a href="./upstairs">The Upstairs</a> - A collection of inside jokes created by myself and Adrian Alemany.`,
                    `<a href="./purple">Pokemon Purple</a> - A ~9 volume comic made back between 4th grade and 7th grade.`
                ]
			});
		},
        () => {
			addSection({
                title: 'Finished Projects',
                main: [
                    `<a href="https://github.com/Fillygroove/complex">complex.js</a> - A javascript file that allows one to use complex numbers.`,
                    `<a href="./jummbox-microtonal/11edo">Jummbox Microtonal</a> - Various versions of Jummbox that allow for microtonality.`,
                    `<a href="./simple-fractal-generator">Modded Simple Fract r3</a> - A mod of <a href="http://script-schmiede.de/labs/fractals/r3/">Simple Fract r3</a> by Jochen Renner.`,
                    `<a href="./modded-ftb">Modded Fantasy Tank Builder</a> - A mod of <a href="https://iblobtouch.github.io/">Fantasy Tank Builder</a>. Code from this mod was contributed to the custom body shape feature which makes my heart's bpm go wheeee.`,
                    `<a href="./periodic-table">Periodic Table</a> - A literal periodic table.`,
                    `<a href="./sandbox-3.1">Sandbox 3.1</a> - One of the many modifications of Beepbox. Sandbox was originally owned by <a href="https://github.com/Parad0xStuff">NeverNova</a>.`
                ]
			});
		},
        () => {
			addSection({
                title: 'Scrapped Projects',
                main: [
                    `<a href="./cardiacs">Cardiacs</a> - A scrapped lyrics portal for the band Cardiacs.`
                ]
			});
		}
    ]
};
