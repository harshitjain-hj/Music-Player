import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
}) => {
  // Event Handler
  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const drag = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrack = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-back") {
      currentIndex = currentIndex === 0 ? songs.length : currentIndex;
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    } else {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={drag}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="previous"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrack("skip-back")}
        />
        <FontAwesomeIcon
          className="play"
          onClick={playSong}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="next"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrack("skip-fwd")}
        />
      </div>
    </div>
  );
};

export default Player;
