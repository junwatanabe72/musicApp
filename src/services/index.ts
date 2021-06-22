export const fetchData = async (targetUrl: string): Promise<Music[]> => {
  const res = await fetch(targetUrl)
  if (res.status !== 200) {
    return []
  }
  const data = await res.text()
  const { results } = JSON.parse(data)
  return results
}
