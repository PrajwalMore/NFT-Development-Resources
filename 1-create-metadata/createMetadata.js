const fs = require('fs')
const metadataValues = require('./metadataArray');

const metadataObj = {
    "name": "",
    "description": "",
    "image": "",
    "attributes": [
        {
            "trait_type": "attribute1",
            "value": 0
        },
        {
            "trait_type": "attribute2",
            "value": 0
        },
        {
            "trait_type": "attribute3",
            "value": 0
        },
        {
            "trait_type": "attribut4",
            "value": 0
        }
    ]
}
module.exports = async () => {

    index = 0;
    metadataValuesLen = Object.keys(metadataValues).length;
    while (index < metadataValuesLen) {
        //Setting NFT name in metadata.
        metadataObj['name'] = "NFT" + (index + 1);

        urlStr = "https://gateway.pinata.cloud/ipfs/{your_hash_IPFS_here}/"
        
        //Setting image url in metadata.
        metadataObj['image'] = urlStr + metadataValues[index][0] + ".png";

        metadataObj['attributes'][0]['value'] = metadataValues[index][1];
        metadataObj['attributes'][1]['value'] = metadataValues[index][2];
        metadataObj['attributes'][2]['value'] = metadataValues[index][3];
        metadataObj['attributes'][3]['value'] = metadataValues[index][4];

        let data = JSON.stringify(metadataObj);
        fs.writeFileSync('metadata/' + "NFT_Metadata" + index , data);
        console.clear();

        console.log("---------------------------------------------\n" + (index+1) + " metadata files created!");
        index++;
    }
}
