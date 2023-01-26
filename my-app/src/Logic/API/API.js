export const API = 'https://d2api.netlify.app/api/'
export const rawListAPI = [
'/api/armor.json',
'/api/books.json',
'/api/charstats.json',
'/api/compcode.json',
'/api/cubemain.json',
'/api/difficultylevels.json',
'/api/elemtypes.json',
'/api/events.json',
'/api/expansionstring.json',
'/api/experience.json',
'/api/gems.json',
'/api/hireling.json',
'/api/inventory.json',
'/api/itemratio.json',
'/api/itemstatcost.json',
'/api/itemtypes.json',
'/api/levels.json',
'/api/lvlmaze.json',
'/api/lvlprest.json',
'/api/lvlsub.json',
'/api/lvltypes.json',
'/api/magicprefix.json',
'/api/magicsuffix.json',
'/api/merged.json',
'/api/misc.json',
'/api/misscalc.json',
'/api/missiles.json',
'/api/monai.json',
'/api/monequip.json',
'/api/monlvl.json',
'/api/monmode.json',
'/api/monplace.json',
'/api/monpreset.json',
'/api/monprop.json',
'/api/monseq.json',
'/api/monsounds.json',
'/api/monstats.json',
'/api/monstats2.json',
'/api/montype.json',
'/api/monumod.json',
'/api/npc.json',
'/api/objects.json',
'/api/overlay.json',
'/api/patchstring.json',
'/api/pettype.json',
'/api/plrmode.json',
'/api/properties.json',
'/api/readme.json',
'/api/runes.json',
'/api/setitems.json',
'/api/sets.json',
'/api/shrines.json',
'/api/skillcalc.json',
'/api/skilldesc.json',
'/api/skills.json',
'/api/soundenviron.json',
'/api/sounds.json',
'/api/states.json',
'/api/string.json',
'/api/superuniques.json',
'/api/treasureclassex.json',
'/api/uniqueappellation.json',
'/api/uniqueitems.json',
'/api/uniqueprefix.json',
'/api/uniquesuffix.json',
'/api/uniquetitle.json',
'/api/weapons.json'
]
export const listItemAPI = []
rawListAPI.forEach((el) => {
    listItemAPI.push(el.toString().slice(5))
    return listItemAPI
})