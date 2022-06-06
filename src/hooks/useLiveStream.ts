import { STREAM_URL } from "@/constants";
import Hls from "hls.js";

type LiveStreamParams = {
  livePlayer: HTMLMediaElement | any;
  onFulfilled: () => void;
  onError: () => void;
};

export default function useLiveStream({
  livePlayer,
  onFulfilled,
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
      livePlayer.play();
      onFulfilled();
    });

    hls.on(Hls.Events.ERROR, () => {
      onError();
    });
  }
}
