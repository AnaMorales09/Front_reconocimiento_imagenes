import { api } from "@/lib/api";
import { RecognitionResponse } from "@/types/recognition";

export async function recognizeImage(
  image: File
): Promise<RecognitionResponse> {
  const formData = new FormData();

  formData.append("image", image);

  const response = await api.post<RecognitionResponse>(
    "/recognize",
    formData
  );

  return response.data;
}