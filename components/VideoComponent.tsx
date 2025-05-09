import { list } from "@vercel/blob";
import styles from "./VideoComponent.module.css"
import Player from "next-video/player"

export async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  console.log(blobs);
  const { url } = blobs[0];

  return (
    <Player
    className={styles.VideoComponent}
      src={url}
    />
  );
}
