import React from 'react';

function ImageUpload({ onImageUpload }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onImageUpload(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default ImageUpload;
