export const isValidURL = ({ url }: { url: string }) => {
  // Regular expression to match URLs
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  // Parse the URL using the url module to check for validity
  try {
    const parsedURL = new URL(url);
    return urlPattern.test(parsedURL.href);
  } catch (error) {
    // An error will be thrown for invalid URLs
    return false;
  }
};
