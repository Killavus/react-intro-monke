import { useState } from "react";
import { randomChoice } from "../utils";
import MonkeControls from "./MonkeControls";
import MonkeGallery from "./MonkeGallery";
import MonkeView from "./MonkeView";

const MonkeApp = ({ monkeCollection }: { monkeCollection: string[] }) => {
  const [monkeImage, setMonkeImage] = useState(randomChoice(monkeCollection));
  const [yesImages, setYesImages] = useState<string[]>([]);
  const [noImages, setNoImages] = useState<string[]>([]);

  const onNewImage = () => {
    setMonkeImage(
      randomChoice(
        monkeCollection.filter(
          (image) =>
            image !== monkeImage &&
            !yesImages.includes(image) &&
            !noImages.includes(image)
        )
      )
    );
  };

  const onYes = () => {
    if (monkeImage === undefined) {
      return;
    }

    setYesImages((yesImages) => [...yesImages, monkeImage]);
    onNewImage();
  };

  const onNo = () => {
    if (monkeImage === undefined) {
      return;
    }

    setNoImages((noImages) => [...noImages, monkeImage]);
    onNewImage();
  };

  return (
    <>
      {monkeImage === undefined ? null : (
        <>
          <MonkeView image={monkeImage} />
          <MonkeControls onYes={onYes} onNo={onNo} />
        </>
      )}
      <MonkeGallery yesImages={yesImages} noImages={noImages} />
    </>
  );
};

export default MonkeApp;
