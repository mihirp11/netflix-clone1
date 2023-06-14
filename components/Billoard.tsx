import styles from "@/styles/billboard.module.css";
import useBillboard from "@/hooks/useBillboard";
import { useState } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import MuteButton from "@/components/MuteButton";
const Billboard = () => {
  const { data } = useBillboard();
  const [muted, setMuted] = useState(true);

  // @ts-ignore
  return (
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
        style={{ position: "absolute", right: "3rem", bottom: "4rem" }}
        muted={muted}
        setMuted={setMuted}
      />
    </div>
  );
};

export default Billboard;
