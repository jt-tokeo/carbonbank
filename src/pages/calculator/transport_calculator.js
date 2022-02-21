const transport_calculator = (type) => {
    let transport;

    // jet
    // https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=Avion
    //kgCO2e/p.km

    // 500 - 1 000 km, 101 - 220 stool
    const shortHaulFlight = 0.230;
    // 1 000 - 2 000 km, 101 - 220 stool
    const mediumHaulFlight = 0.186;
    // + 3 500 km, > 220 stool
    const longHaulFlight = 0.151;

    //bus
    // kg
    // https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=autobus
    const busGazole = 0.104;
    const busElec = 0.0217
    const busGnv = 0.113;

    // motorbike
    // kgCO²/p.km
    // https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=moto

    // < 250 cm3
    const motorbikelittle = 0.0604;
    // > 250 cm3
    const motorbikemedium = 0.165;

    // train
    // kgCO²/p.km
    // http://medias.sncf.com/sncfcom/pdf/co2/Information_CO2_des_prestations_de_transport_Methodologie_generale.pdf
    // https://www.bilans-ges.ademe.fr/docutheque/docs/%5BBase%20Carbone%5D%20Documentation%20g%C3%A9n%C3%A9rale%20v20.2.pdf
    // https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=metro
    const trainTer = 0.0294;
    const trainTgv = 0.0024;
    const trainIntercite = 0.0081;
    const trainRer = 0.0054;
    const metro = 0.00250;

    // car
    //kgCO²/km
    //https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=voiture
    const carGazole = 0.106;
    const carEssence = 0.125;
    const carGNV = 0.122;
    const carGPL = 0.120;
    const carE85 = 0.76;
    const carThermique = (carGazole + carEssence + carGNV + carGPL + carE85) / 5;
    
    const carElecCompact = 0.103;
    const carEleclight = 0.0953;
    const carElecBerline = 0.139;
    const carElec = (carElecCompact + carEleclight + carElecBerline) / 3;

    const carHybridDiesel = 0.217;
    const carHybridDieselBerline = 0.277;
    const carHybrydEssence = 0.232;
    const carHybrydEssenceBerline = 0.348;
    const carHybrid = ((carHybridDiesel + carHybrydEssence) / 2) + ((carHybridDieselBerline + carHybrydEssenceBerline) /2) /2;

    // boat
    // kgCO2e/p.km
    // https://www.bilans-ges.ademe.fr/docutheque/docs/%5BBase%20Carbone%5D%20Documentation%20g%C3%A9n%C3%A9rale%20v20.2.pdf
    // https://www.bilans-ges.ademe.fr/documentation/UPLOAD_DOC_FR/index.htm?maritime.htm
    // https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=bateau
    const boatFluviale = 0.0643;

    switch (type) {
        case 'bus-gazole':
            transport = busGazole;
            break;
        case 'bus-elec':
            transport = busElec;
            break;
        case 'bus-gaz':
            transport = busGnv;
            break;

        case 'boat':
            transport = boatFluviale;
            break;

        case 'trainTer':
            transport = trainTer;
            break;
        case 'trainTgv':
            transport = trainTgv;
            break;
        case 'trainRer':
            transport = trainRer;
            break;
        case 'Metro':
            transport = metro;
            break;

        case 'car-elec':
            transport = carElec;
            break;
        case 'car-ther':
            transport = carThermique;
            break;
        case 'car-hyb':
            transport = carHybrid;
            break;

        case 'motorbike':
            transport = (motorbikelittle + motorbikemedium) / 2;
            break;
        case 'plane':
            transport = (shortHaulFlight + mediumHaulFlight + longHaulFlight) / 3;
            break;

        default:
            transport = 0;
            break;
    }
    return transport;
};

export default transport_calculator;



//calculator
function CarbonCalculator(typeOfVehicule, distance, NumberMulty, NumberUser) {
    let footPrintCarbonCar;
    if (NumberUser) {
        footPrintCarbonCar = ((typeOfVehicule * distance) * NumberUser) * NumberMulty;
    } else {
        footPrintCarbonCar = (typeOfVehicule * distance) * NumberMulty;
    }

    //arrondie 4 aprés la virgule
    var nombre = footPrintCarbonCar;
    var arrondi = Math.round(nombre * 10000) / 10000;
    return arrondi;
}

export { CarbonCalculator };