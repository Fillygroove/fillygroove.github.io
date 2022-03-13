let data = {
    topbar: [{
        name: 'Bandcamp',
        link: 'https://fourequalsfive.bandcamp.com/'
    }, {
        name: 'Soundcloud',
        link: 'https://soundcloud.com/namenco'
    }],
    name: `The Blog`,
    main: [
        `Hello! I try to update this frequently, updating at least once every 1-4 days. I talk about music (my own and what I listen to) and my day.`,
        `Everything is sorted by date from newest to oldest.`,
        () => {
			addSection({
                title: 'March',
                main: [
                    `<a href="?p=22-3-11">March 11th, 2022</a> <span class="new">(New!)</span>`,
                    `<a href="?p=22-3-8">March 8th, 2022</a>`
                ]
			});
		}
    ]
};
