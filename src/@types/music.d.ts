type Music = {
  artistName: string
  trackName: string
  artistViewUrl: string
  collectionViewUrl: string
  previewUrl: string
  artworkUrl100: string
}
type APIMusic = {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: number
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  trackViewUrl: string
  previewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  discCount: number
  discNumber: number
  trackCount: number
  trackNumber: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  isStreamable: boolean
  collectionPrice?: number
  trackPrice?: number
  collectionArtistId?: number
  collectionArtistName?: string
  collectionArtistViewUrl?: string
  contentAdvisoryRating?: string
}
