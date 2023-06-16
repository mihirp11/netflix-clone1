import styles from "@/styles/mutebutton.module.css";
import React from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { GrRefresh } from "react-icons/gr";
type MuteButtonProps = {
  muted?: boolean;
  setMuted?: (a: boolean) => void;
  ended?: boolean;
  setEnded?: (a: boolean) => void;
  style: any;
};
const MuteButton: React.FC<MuteButtonProps> = ({
  ended,
  setEnded,
  muted,
  setMuted,
  style,
}) => {
  return (
    <button
      className={styles.container}
      style={{
        ...style,
      }}
      onClick={() =>
        setEnded ? setEnded(!ended) : setMuted ? setMuted(!muted) : null
      }
    >
      {ended ? (
        <GrRefresh className={styles.icon} color={"white"} />
      ) : muted ? (
        <HiOutlineSpeakerXMark className={styles.icon} color={"white"} />
      ) : (
        <HiOutlineSpeakerWave className={styles.icon} color={"white"} />
      )}
    </button>
  );
};

export default MuteButton;
