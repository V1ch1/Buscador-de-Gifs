export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=50&api_key=GpGfIoNrKaPB61AVFD5Iha6CSDEsx7PG`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.fixed_height.url,
    };
  });
  return gifs;
};
