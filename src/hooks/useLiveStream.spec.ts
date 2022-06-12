import { describe, expect, it, vi } from "vitest";
import useLiveStream from "./useLiveStream";

vi.mock("hls.js", () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return {
        isSupported: vi.fn().mockReturnValue(true),
      };
    }),
  };
});

describe("useLiveStream", () => {
  describe("When can play type is true", () => {
    const livePlayer: HTMLMediaElement | any = {
      src: "",
      muted: false,
      canPlayType: () => true,
    };

    useLiveStream({ livePlayer, onError: () => {} });

    it("scr to changed", () => {
      expect(livePlayer.src).toBe("http://localhost:8080/hls/one.m3u8");
    });

    it("muted to be false", () => {
      expect(livePlayer.muted).toBeFalsy();
    });
  });

  // TODO: Implement When Hls is supported
});
