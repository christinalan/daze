// video.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
        placeholder?: string;
        priority?: boolean;
      }
    }
  }