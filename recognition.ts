export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Detection {
  id: string;
  classId: number;
  className: string;
  confidence: number;
  boundingBox: BoundingBox;
}

export interface RecognitionResponse {
  detections: Detection[];
  inferenceTimeMs: number;
  imageWidth: number;
  imageHeight: number;
}