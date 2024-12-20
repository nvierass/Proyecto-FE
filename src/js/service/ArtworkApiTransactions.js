const BASE_URL = "https://api.artic.edu/api/v1/artworks";

function generateRandomOffset(){
    return getRandomInt(0, 200);
} 

function getRandomInt(minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;
}

async function fetchArtworks(offset){
    try {
    let offsetPageParam = "page=" + offset;
    const response = await fetch(BASE_URL + "?" + offsetPageParam);
    if (response.status === 200){
        console.log("Solicitud correcta")
        const responseJson = await response.json();
        return {rawData: responseJson, data: responseJson.data, imageRepositoryInfo: responseJson.config};
        }
    }
    catch ({error, message}){
        console.error(error);
        console.log(message);
        return;
    }
}

async function fetchArtworksByQuery(searchQuery){
    let queryParam = "q="+searchQuery;
    let fieldsParams = "&fields=id,title,description,image_id"
    const response = await fetch(BASE_URL + "/search?" + queryParam + fieldsParams);
    const responseJson = await response.json();
    return {rawData: responseJson, data: responseJson.data, imageRepositoryInfo: responseJson.config}
}

export const getRandomArtworksGallery = async () => {
    let randomOffset = generateRandomOffset();
    let artworksData = await fetchArtworks(randomOffset);
    buildArtworksImages(artworksData);
    return artworksData.data;
}

export const getQueryArtworksGallery = async (query) => {
    let artworksData = await fetchArtworksByQuery(query);
    buildArtworksImages(artworksData);
    return artworksData.data;
}

function buildArtworksImages(artworksData){
    const IIIF_URL = artworksData.imageRepositoryInfo.iiif_url;
    const IMAGE_FORMAT = "/full/843,/0/default.jpg";
    artworksData.data.forEach((artwork) => {
        artwork.image_url = IIIF_URL + "/" + artwork.image_id + IMAGE_FORMAT;
    });

}
