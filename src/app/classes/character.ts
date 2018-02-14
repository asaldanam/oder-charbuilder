export class Character {
    id:string;
    wowName:string;
    realmId:string;
    rpName:string;
    rpSurname:string;
    level:number;
    class:string;
    spec:string;
    specVitality:number;
    race:string;
    attributes: {
        vit:number;
        str:number;
        dex:number;
        con:number;
        int:number;
        wis:number;
        cha:number;
        pur:number;
    };
    compentencies: {
        lightWeapons:number;
        heavyWeapons:number;
        rangeWeapons:number;
        magicBonus:number;
    };
    armor: {
        armorType:number;
        defense:number;
        physicalDmgReduction:number;
        magicDmgReduction:number;
    };
    salvation: {
        fortitude:number;
        reflexes:number;
        willpower:number;
    }
    weapons?:any;
    features?:any;
    hasSpells:boolean; 
    spells:number;
}
