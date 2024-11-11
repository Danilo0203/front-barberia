export interface BackgroundProps {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  titulo: string;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  fondo_pantalla: FondoPantalla | null;
}

export interface FondoPantalla {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Meta {}
