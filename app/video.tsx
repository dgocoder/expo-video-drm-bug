import { View, StyleSheet } from "react-native";
import { useVideoPlayer, VideoView, type VideoSource } from "expo-video";
import { useRef } from "react";

export default function VideoScreen() {
  const ref = useRef<VideoView>(null);
  const videoSource = {
    uri: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    drm: {
      licenseServer: "https://license-global.pallycon.com/ri/licenseManager.do",
      type: "fairplay",
      certificateUrl:
        "https://license-global.pallycon.com/ri/fpsCert.do?siteId=RWAB",
      headers: {
        "pallycon-customdata-v2": "",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
    metadata: {
      title: "Test title",
    },
  } satisfies VideoSource;

  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });
  return (
    <View style={styles.videoWrapper}>
      <VideoView
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        allowsVideoFrameAnalysis
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  videoWrapper: {
    aspectRatio: "16/9",
    position: "relative",
    width: "100%",
  },
});
