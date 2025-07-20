export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const getAuthToken = () => {
  return 'mock-jwt-token';
};

export const setAuthToken = (token) => {
  return true;
};

export const removeAuthToken = () => {
  return true;
};

export const getCurrentUser = () => {
  return {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '👤'
  };
};