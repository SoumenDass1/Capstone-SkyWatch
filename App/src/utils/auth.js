export const login = async (email, password) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  // In a real app, this would validate against a backend
  return { success: true }
}

export const signup = async (name, email, password) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  // In a real app, this would create a new user in a backend
  return { success: true }
}