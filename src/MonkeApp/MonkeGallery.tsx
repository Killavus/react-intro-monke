type GalleryProps = {
  yesImages: string[];
  noImages: string[];
};

const MonkeGallery = ({ yesImages, noImages }: GalleryProps) => {
  return (
    <article className="monkeGallery">
      <h2>MIUT:</h2>
      <section className="monkeGallerySection">
        {yesImages.map((image) => (
          <img src={`/${image}`} alt="" key={image} />
        ))}
      </section>
      <h2>SMRUT:</h2>
      <section className="monkeGallerySection">
        {noImages.map((image) => (
          <img src={`/${image}`} alt="" key={image} />
        ))}
      </section>
    </article>
  );
};

export default MonkeGallery;
