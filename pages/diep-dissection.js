let data = {
    name: `Exactly how Diep's design works`,
    main: [
        `The principal characters of diep are Tanks. These tanks have a sort of iconic look to them. This is due to a variety of reasons, which I WILL be getting into! There's gonna be a lot of tables on this page, so read at your own risk!!!`,
        `<hr/><b>Clarifications</b>`,
        `Only one thing I feel as if I should clarify; When I talk about a tank's construction, I am assuming that the front of the tank is pointing up Keep this in mind!`,
        `<hr/><b>Unit Scaling</b>`,
        `A "unit" is just the measurement I'll use for this page. For reference, 50 units is one side of a background tile, so a background square in Diep is 50 by 50 units.`,
        `<hr/><b>The Basics</b>`,
        `In the code, all tanks are built off of the assumption that the tank is level 1 and so will everything else on this page; For reference, a tank's size grows by 1% every level. When a tank is constructed, I like to imagine the body being placed first; The normal circular tank body has a radius of 50 units.`,
        `Barrels are first placed with the bottom middle being located at the center of the tank. This position can be manipulated with variables. Speaking of variables, a gun can be defined with just a few of them; Here they are, with examples of their usage in parenthesis:`,
        () => addList([
            `Length - A number that determines how long a barrel is, measured in units; This variable is the difference between Tank's barrel (95) and Sniper's barrel (110).`,
            `Width - A number that determines how wide a barrel is, measured in multiples of 42 units; This variable is the difference between Tank's barrel (1) and Destroyer's barrel (1.7); In order to get their size in units, you multiply the width value by 42; For example, if you want Destroyer's width in units, you take the cannon's width value (1.7) and multiply it by 42 to get 71.4 units, which is indeed how wide the cannon is.`,
            `X - A number that determines how far left or right the barrel is positioned, negative meaning left and positive meaning right; This variable is the difference between Twin's left barrel and Twin's right barrel.`,
            `Y - A number that determines how far up or down the barrel is positioned, negative meaning down and positive meaning up; This variable is used for the end of Trapper's gun to place the trapezoid.`,
            `Angle - A number that determines the facing angle of the gun, measured in degrees; This variable is the difference between Flank Guard's front barrel and Flank Guard's back barrel.`,
            `Is Trapezoid - A boolean, true or false, that determines if the gun is a trapezoid; This variable is the difference between Tank's barrel and Machine Gun's barrel. If the gun is a trapezoid, the end width of the gun is multiplied by 1.75.`,
            `Trapezoid Angle - A number that determines the direction of a trapezoidal gun, measured in degrees; This variable is the reason why Machine Gun's barrel has the bigger width towards the top and Stalker has the shorter width towards the top.`,
        ]),
        `Will be finished soon!`,
    ]
};
