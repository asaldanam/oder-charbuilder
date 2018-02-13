export interface Character {
    id:string;
    wowName?:string;
    realmId?:string;
    rpName?:string;
    rpSurname?:string;
    level?:number;
    class?:string;
    spec?:string;
    race?:string;
    attributes?: {
        str?:number;
        dex?:number;
        con?:number;
        int?:number;
        wis?:number;
        cha?:number;
        pur?:number;
    };
    compentencies?: {
        lightWeapons?:number;
        heavyWeapons?:number;
        rangeWeapons?:number;
        magicBonus?:number;
    };
    armor?: {
        armorType?:number;
        defense?:number;
        physicalDmgReduction?:number;
        magicDmgReduction?:number
    };
    salvation?: {
        fortitude?:number;
        reflexes?:number;
        willpower?:number;
    }
    weapons?: [
        {
         id?:string;
         bonus?:number   
        }
    ];
    spells?:number;
}
// export interface Character {
//     id?: 'anarel_los-errantes';
//     wowName?: 'anarel';
//     realmId?: 'los-errantes';
//     rpName?: 'Anarel';
//     rpSurname?: 'Clarosol';
//     level?: 1;
//     class?: 'paladin';
//     spec?: 'paholy';
//     race?: 'bloodelf';
//     attributes?: {
//         str?:number;
//         dex?:number;
//         con?:number;
//         int?:number;
//         wis?:number;
//         cha?:number;
//         pur?:number;
//     };
//     compentencies?: {
//         lightWeapons?:number;
//         heavyWeapons?:number;
//         rangeWeapons?:number;
//         magicBonus?:number;
//     };
//     armor?: {
//         armorType?: 1;
//         defense?:number;
//         physicalDmgReduction?:number;
//         magicDmgReduction?:number
//     };
//     salvation?: {
//         fortitude?:number;
//         reflexes?:number;
//         willpower?:number;
//     }
//     weapons?: [
//         {
//          id?: 'weapon-id';
//          bonus?:number   
//         }
//     ];
//     spells?:number;
// }
