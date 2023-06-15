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
        `Hello, I'm <u>Fillygroove</u>! I'm a musician and a coder. I made this website as a sort of "hub" for my projects. I'll try and update it regularly and make as many improvements as I can.`,
        () => {
			addSection({
                title: 'Fun facts about me!',
                main: [
                    `My name is Isabella Clarise Lyra Nicole Smith (yeesh, i know.)`,
                    `I was born on June 11th 2004 (that's more than 10 years ago!)`,
                    `My online name, Fillygroove, comes from a song made by Rabiesx86. <a href="https://www.youtube.com/watch?v=69a4apq6oeA">You can find it here!</a>`,
                    `I am an avid fan of origami, puzzles, Magma (the french band), Diep.io, and more!`
                ]
			});
		},
        () => {
			addSection({
                title: 'Ongoing Projects',
                main: [
                    `<a href="http://woomy-site.glitch.me/">Woomy Arras</a> - A diep clone with over 2000 tanks that is constantly getting updated.`,
                    `<a href="https://fourequalsfive.bandcamp.com/">Sinetooth</a> - My musical exploits compiled into albums, made with love.`,
                    `<a href="./?p=diep-dissection">Diep Dissection</a> - A document about Diep's tank design and it's irregularities.`,
                    `<a href="./purple">Pokemon Purple</a> - A ~9 volume comic made back between 4th grade and 7th grade.`,
                    `<a href="https://docs.google.com/spreadsheets/d/1NG-wqNEz6sZD86HmirhmNjxc7gXbUYU6Im4wrmFy58w/edit?usp=sharing">Kobaïan Dissertation</a> - Google document about my favorite band, Magma.`,
                    `<a href="./?p=luigi">Luigi Thread</a> - An archive of discord messages that follows the story of Luigi (from Mario Bros.) and the weird things he does.`
                ]
			});
		},
        () => {
			addSection({
                title: 'Paused Projects',
                main: [
                    `<a href="./metaventures">Metaventures</a> - A comic series made by Text Wall, Gramiatar, Fristo, and myself.`,
                    `<a href="./tetris">Tetris</a> - A really buggy tetris clone.`,
                    `<a href="./upstairs">The Upstairs</a> - A collection of inside jokes created by myself and Adrian Alemany.`,
                    `<a href="./cardiacs">Cardiacs</a> - A scrapped lyrics portal for the band Cardiacs.`,
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
        `Thanks for reading, luv ya! <3`,
    ]
};
