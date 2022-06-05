import { STREAM_URL } from "@/constants";
import Hls from "hls.js";

type LiveStreamParams = {
  livePlayer: HTMLMediaElement | any;
  onError: () => void;
};

export default function useLiveStream({
  livePlayer,
  onError,
}: LiveStreamParams): void {
  const canPlayType =
    livePlayer && livePlayer.canPlayType("application/vnd.apple.mpegurl");

  if (canPlayType) {
    livePlayer.muted = false;
    livePlayer.src = STREAM_URL;
  } else if (Hls.isSupported()) {
    const hls = new Hls();

    hls.loadSource(STREAM_URL);
    hls.attachMedia(livePlayer);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      livePlayer.muted = false;
      livePlayer.play();
    });

    hls.on(Hls.Events.ERROR, () => {
      onError();
    });
  }
}
