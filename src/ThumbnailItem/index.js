import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onImageClicking = () => {
    onClickImage(id)
  }
  return (
    <li className="image-item">
      <button type="button" className="thumbnail-btn" onClick={onImageClicking}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
