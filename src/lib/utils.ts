// src/lib/utils.ts 
interface ApiResponse {
  data?: unknown;
  error?: string;
  status: number;
}

export const handleApiResponse = async (response: Response): Promise<ApiResponse> => {
  try {
    const data = await response.json();
    if (!response.ok) {
      return {
        error: data.message || 'An error occurred',
        status: response.status
      };
    }
    return {
      data,
      status: response.status
    };
  } catch (error) {
    return {
      error: 'Failed to parse response',
      status: response.status
    };
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
