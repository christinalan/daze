declare module '*.mp4' {
    const src: string;
    export default src;
  }

  declare module '*.webm' {
    const src: string;
    export default src;
  }

  declare module '*.mp3' {
    const src: string;
    export default src;
  }

  declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }