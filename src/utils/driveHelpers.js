/**
 * Convierte un ID de Google Drive a URL de previsualización
 * @param {string} fileId - ID del archivo de Drive
 * @returns {string} - URL de previsualización
 */
export const getDrivePreviewUrl = (fileId) => {
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

/**
 * Convierte un ID de Google Drive a URL de descarga directa
 * @param {string} fileId - ID del archivo de Drive
 * @returns {string} - URL de descarga
 */
export const getDriveDownloadUrl = (fileId) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

/**
 * Convierte un ID de Google Drive a URL de visualización
 * @param {string} fileId - ID del archivo de Drive
 * @returns {string} - URL de visualización
 */
export const getDriveViewUrl = (fileId) => {
  return `https://drive.google.com/file/d/${fileId}/view`;
};

/**
 * Extrae el ID de un enlace completo de Google Drive
 * @param {string} driveUrl - URL completa de Drive
 * @returns {string|null} - ID del archivo o null si no es válido
 */
export const extractDriveId = (driveUrl) => {
  const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};