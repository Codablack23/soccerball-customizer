import { useDropzone } from "react-dropzone";

export default function UploadDropZone(){
  const {getInputProps,getRootProps} = useDropzone({
    onDrop:(files)=>console.log(files)
  })
  return (
    <div {...getRootProps()} className="dropzone flex items-center border rounded-md border-purple-300 justify-center my-4 mx-auto bg-gray-100">
       <div>
       <i className="bi bi-cloud-upload text-purple-600 text-5xl"></i>
       <input {...getInputProps()} id="drop"/>
       <p>Drag drop some gltf,glb or obj files here, or click to select files</p>
       </div>
    </div>
  )
}