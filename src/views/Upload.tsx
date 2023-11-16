import UploadDropZone from "../components/UploadDropZone"
import "../styles/upload.scss"

export default function Upload(){
    return(
        <div className="upload-container">
          <h3 className="title">Upload</h3>
          <UploadDropZone/>
        </div>
    )
}