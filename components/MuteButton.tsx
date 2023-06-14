import styles from "@/styles/mutebutton.module.css";
import React from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
type MuteButtonProps = {
  muted: boolean;
  setMuted: (a: boolean) => void;
  style: any;
};
const MuteButton: React.FC<MuteButtonProps> = ({ muted, setMuted, style }) => {
  return (
    <button
      className={styles.container}
      style={{
        ...style,
      }}
      onClick={() => setMuted(!muted)}
    >
      {muted ? (
        <HiOutlineSpeakerXMark className={styles.icon} color={"white"} />
      ) : (
        <HiOutlineSpeakerWave className={styles.icon} color={"white"} />
      )}
    </button>
  );
};

export default MuteButton;
