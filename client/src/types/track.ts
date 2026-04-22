export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  size_mb: number;
  encoded_audio: string;
}

export type TrackResponse = Track[];
