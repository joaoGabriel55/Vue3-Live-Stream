import { describe, expect, it, vi } from "vitest";
import useLiveStream from "./useLiveStream";

vi.mock("hls.js", () => ({
  default: {
    isSupported(): boolean {
      return true;
    },
  },
}));

describe("useLiveStream", () => {
  describe("When can play type is true", () => {
    let livePlayer: HTMLMediaElement | any = {
      src: "",
      muted: false,
      canPlayType: () => true,
    };

    useLiveStream(livePlayer);

    it("scr to changed", () => {
      expect(livePlayer.src).toBe("http://localhost:8080/hls/one.m3u8");
    });

    it("muted to be false", () => {
      expect(livePlayer.muted).toBeFalsy();
    });
  });

  // TODO: Implement When Hls is supported
});
