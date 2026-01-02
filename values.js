const dict = {
    Main: {
        Basics: {
            Gender: ['select','feminine','masculine'],
            'Skin Color': ['color']
        },
        Clothes: 'Directory',
        Body: 'Directory'
    },
    Clothes: {
        Main: 'Directory',
        Shirt: {
            Outer: ['select','Sweater','Hoodie'],
            Type: ['select','Tee-shirt','Long-sleeve'],
            Brand: ['select','MSYT'],
            Color: ['color'],
            Accent: ['color']
        },
        Pants: {
            Type: ['select','Cargo','Jeans','Sweats','Tights','Shorts'],
            Bands: ['select','Belt'],
            Color: ['color'],
            Accent: ['color']
        },
        Socks: {},
        Shoes: {},
        Hat: {},
        Necklace: {},
        Gloves: {},
        Bands: {}
    },
    Body: {
        Main: 'Directory',
        Hair: {},
        Face: 'Directory',
        Torso: 'Directory',
        Arms: {},
        Legs: {},
        Hands: {},
        Feet: {}
    },
    Face: {Body: 'Directory'},
    Torso: {Body: 'Directory'}
}
const vals = {
    Basics: {
        Gender: 'null',
        'Skin Color': '#ffe7b3'
    },
    Shirt: {
        Outer: 'null',
        Type: 'null',
        Brand: 'null',
        Color: '#147500',
        Accent: '#955e37'
    },
    Pants: {
        Type: 'null',
        Bands: 'null',
        Color: '#00319a',
        Accent: '#493710'
    },
    Socks: {},
    Shoes: {},
    Hat: {},
    Necklace: {},
    Gloves: {},
    Bands: {},
    Hair: {},
    Arms: {},
    Legs: {},
    Hands: {},
    Feet: {}
}