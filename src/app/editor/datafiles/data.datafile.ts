import { Character } from "../../classes/character";

export const specs = {
  collection: 'specs',
  items: [
      {
      id: '',
      wowName: '',
      realmId: '',
      rpName: '',
      rpSurname: '',
      level: 0,
      class: 'warlock',
      spec: 'waafliction',
      specVitality: 6,
      race: '',
      attributes: {
          vit: 0,
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0,
          pur: 0,
      },
      compentencies: {
          lightWeapons: 0,
          heavyWeapons: 0,
          rangeWeapons: 0,
          magicBonus: 3,
      },
      armor: {
          armorType: 1,
          defense: 0,
          physicalDmgReduction: 0,
          magicDmgReduction: 0,
      },
      salvation: {
          fortitude: 0,
          reflexes: 1,
          willpower: 2,
      },
      weapons: [
          {
          id: '',
          bonus: 0
          }
      ],
      features: [
        {
          name: 'Rastreo demoníaco',
          value: 2
        }
      ],
      hasSpells: true,
      spells: 0
    }
  ]
};

export const realms = {
  collection: 'realms',
  items: [
    { id: 'los-errantes', name: 'Los Errantes', },
    { id: 'tyrande', name: 'Tyrande', },
    { id: 'colinas-pardas', name: 'Colinas Pardas', }
  ]
};

export const races = {
  collection: 'realms',
  items: [
    { id: 'forsaken',
      name: 'Renegado',
      stats: {
        
      }
    }
  ]
};