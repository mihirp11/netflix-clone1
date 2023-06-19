import styles from "@/styles/billboard.module.css";
import useBillboard from "@/hooks/useBillboard";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import MuteButton from "@/components/MuteButton";
import { GrRefresh } from "react-icons/gr";
const Billboard = (style: any) => {
  const { data } = useBillboard();
  const [muted, setMuted] = useState(true);
  const [ended, setEnded] = useState(false);

  return (
    <div style={{ ...style }} className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          onEnded={() => {
            setEnded(true);
          }}
          muted={muted}
          autoPlay={!ended}
          className={styles.video}
          poster={data?.thumbnailUrl}
          src={data?.videoUrl}
        />
        <div
          style={{
            width: "100%",
            height: "20%",
            position: "absolute",
            bottom: "0",
            background: "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.7))",
          }}
        />
        {ended ? (
          <MuteButton
            style={{ position: "absolute", right: "4rem", bottom: "20%" }}
            ended={ended}
            setEnded={setEnded}
          />
        ) : (
          <MuteButton
            style={{ position: "absolute", right: "4rem", bottom: "40%" }}
            muted={muted}
            setMuted={setMuted}
          />
        )}
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
    </div>
  );
};

export default Billboard;
