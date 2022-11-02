export default async (...args) => {
  const response = await window.fetch(...args)
  if (response.ok) {
    return response.json()
  }
  throw new Error()
}
