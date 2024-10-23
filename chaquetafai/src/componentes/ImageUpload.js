import { useState } from 'react';

function ImageUpload({ onImageUpload }) {
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagePreviewUrl(URL.createObjectURL(file));
            onImageUpload(file);
        }
    };

    const handleRemoveFile = () => {
        setImagePreviewUrl(null);
        onImageUpload(null); // Borra la imagen
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {imagePreviewUrl && (
                <div>
                    <img src={imagePreviewUrl} alt="Vista previa" style={{ width: '200px' }} />
                    <button onClick={handleRemoveFile}>Eliminar imagen</button>
                </div>
            )}
        </div>
    );
}

export default ImageUpload;
