// Function definition
const importAll = (r) => {
    let images = [];
    r.keys().map((item, index) => {
      const img = new Image();
      img.src = r(item);
      img.onload = () => {
        images.push({ id: `${index + 1}`, img: r(item), width: img.width, height: img.height });
      };
    });
    return images;
  };
  
  // Images ko import karein
  const images = importAll(require.context('../image/logos', false, /\.(png|jpe?g|svg)$/));
  
  // Export karein
  export const imageData = images;
  
  
  const importsocialAll = (r) => {
    let images = [];
    r.keys().map((item, index) => {
      const img = new Image();
      img.src = r(item);
      img.onload = () => {
        images.push({ id: `${index + 1}`, img: r(item), width: img.width, height: img.height });
      };
    });
    return images;
  };
  
  // Images ko import karein
  const imagesocail = importsocialAll(require.context('../image/social_media', false, /\.(png|jpe?g|svg)$/));
  
  // Export karein
  export const imageDatasocail = imagesocail;
  
  const importVideosAll = (r) => {
    let videos = [];
    r.keys().map((item, index) => {
      if (item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.mov')) {
        videos.push({ id: `${index + 1}`, src: r(item) });
      }
    });
    return videos;
  };
  
  // Videos ko import karein
  const videoFiles = importVideosAll(require.context('../videos', false, /\.(mp4|webm|mov)$/));
  
  // Export karein
  export const videoData = videoFiles;