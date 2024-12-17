const URL = "https://api.artic.edu/api/v1/artworks";

function generateRandomOffset(){
    return getRandomInt(0, 100000);
} 

function getRandomInt(minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;
}

async function fetchArtworks(){
    let offsetParam = "?offset=" + generateRandomOffset();
    let fieldsParam = "?fields=id,title,image_id,description";
    const response = await fetch(URL + offsetParam + fieldsParam);
    return await response.json();
}

function buildArtworksImages(artworksRawData){
    const IIIF_URL = artworksData.config.iiif_url;
    const IMAGE_FORMAT = "/full/843,/0/default.jpg";
    return artworksRawData.data.map((artwork) => {
        artwork.imageUrl = IIIF_URL + artwork.image_id + IMAGE_FORMAT;
        return artwork;
    })
}

export const getArtworkCollection = async () => {
    let artworksRawData = await fetchArtworks();
    console.log(artworksRawData);
    let artworkDataWithImages = buildArtworksImages(artworksRawData);
    

}
