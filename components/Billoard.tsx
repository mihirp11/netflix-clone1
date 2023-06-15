import styles from "@/styles/billboard.module.css";
import useBillboard from "@/hooks/useBillboard";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import MuteButton from "@/components/MuteButton";
const Billboard = () => {
  const { data } = useBillboard();
  const [muted, setMuted] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          onClick={this?.pause()}
          muted={muted}
          autoPlay
          className={styles.video}
          loop
          poster={data?.thumbnailUrl}
          src={data?.videoUrl}
        />
        <MuteButton
          style={{ position: "absolute", right: "4rem", bottom: "20%" }}
          muted={muted}
          setMuted={setMuted}
        />
        <div className={styles.movieLabel}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.description}>{data?.description}</p>
          <button className={styles.moreInfo}>
            <AiOutlineInfoCircle
              style={{ width: "1rem", borderRadius: "0.5rem" }}
            />
            More Info
          </button>
        </div>
      </div>
      <div className={styles.moviesContainer}></div>
    </div>
  );
};

export default Billboard;
