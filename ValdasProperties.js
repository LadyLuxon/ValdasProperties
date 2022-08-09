Hooks.on('ready', () => {

    let weaponProperties = {
        ...CONFIG.DND5E.weaponProperties,
        'am': 'Ammunition',
        'au': 'Automatic',
        'co': 'Concealable',
        'do': 'Double',
        'el': 'Elegant',
        'ex': 'Explosive',
        'fin': 'Finesse',
        'fir': 'Firearm',
        'fis': 'Fist',
        'fo': 'Foregrip',
        'heat': 'Heat',
        'heav': 'Heavy',
        'li': 'Light',
        'lo': 'Loading',
        'ma': 'Massive',
        'mo': 'Mounted',
        'pa': 'Parrying',
        'pr': 'Precision',
        'rea': 'Reach',
        'rel': 'Reload',
        'ret': 'Returning',
        'ro': 'Rocket',
        'sc': 'Scatter',
        'sig': 'Sighted',
        'sil': 'Silvered',
        'su': 'Superheavy',
        'sw': 'Switch',
        'te': 'Tension',
        'th': 'Thrown',
        'tr': 'Trip',
        'twi': 'Twinshot',
        'two': 'Two-handed',
        've': 'Versatile',
    };

    CONFIG.DND5E.weaponProperties = weaponProperties;

    let weaponTypes = {
        ...CONFIG.DND5E.weaponTypes,
        "em": "Exotic Melee",
        "er": "Exotic Range",
    };

    CONFIG.DND5E.weaponTypes = weaponTypes;

    let armorTypes = {
        ...CONFIG.DND5E.armorTypes,
        "ea": "Exotic Armor",
    };

    CONFIG.DND5E.armorTypes = armorTypes;

});
