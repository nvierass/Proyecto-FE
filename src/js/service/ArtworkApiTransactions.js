const URL = "https://api.artic.edu/api/v1/artworks";

function generateRandomOffset(){
    return getRandomInt(0, 100000);
} 

function getRandomInt(minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;
}

async function fetchArtworks(){
    let offsetParam = "offset=0" + generateRandomOffset();
    let fieldsParam = "&fields=id,title,image_id,description";
    const response = await fetch(URL + "?" + offsetParam + fieldsParam);
    const responseJson = await response.json();

    return {data: responseJson.data, imageRepositoryInfo: responseJson.config}
}



export const getRandomArtworksGallery = async () => {
    let artworksData = await fetchArtworks();
    let artworkDataWithImages = buildArtworksImages(artworksData);
    
}

function buildArtworksImages(artworksData){
    const IIIF_URL = artworksData.imageRepositoryInfo.iiif_url;
    const IMAGE_FORMAT = "/full/843,/0/default.jpg";
    artworksData.data.forEach((artwork) => {
        artwork.image_url = IIIF_URL + "/" + artwork.image_id + IMAGE_FORMAT;
    });
    console.log(artworksData.data)
}


const x = (await getRandomArtworksGallery())

