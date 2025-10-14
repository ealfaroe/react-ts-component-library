/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: "src/**/*.stories.{js,jsx,ts,tsx}",
  defaultStory: "button--default",
  hotkeys: {
    search: ["/"],
    fullscreen: ["f"],
    panel: ["a"],
    theme: ["t"],
    mode: ["m"]
  }
};