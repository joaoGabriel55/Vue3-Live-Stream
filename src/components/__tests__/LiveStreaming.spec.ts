import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LiveStreaming from "../LiveStreaming.vue";

describe("LiveStreaming", () => {
  it("renders properly", () => {
    const wrapper = mount(LiveStreaming);
    expect(wrapper.text()).toContain("LIVE");
  });
});
