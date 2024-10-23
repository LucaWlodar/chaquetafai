const CLARIFAI_API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY; // Asegúrate de colocar la clave en tu archivo .env

// Función para convertir la imagen a base64
export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // Obtener solo la parte base64
        reader.onerror = (error) => reject(error);
    });
};

// Función para hacer la solicitud a Clarifai
export const identifyFoodWithClarifai = async (base64Image) => {
    const response = await fetch('https://api.clarifai.com/v2/models/food-item-recognition/outputs', {
        method: 'POST',
        headers: {
            'Authorization': `Key ${CLARIFAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: [
                {
                    data: {
                        image: {
                            base64: base64Image
                        }
                    }
                }
            ]
        })
    });

    const data = await response.json();
    if (response.ok) {
        return data.outputs[0].data.concepts; // Devuelve los conceptos (alimentos) detectados
    } else {
        console.error('Error al identificar el alimento:', data);
        throw new Error('Error al identificar el alimento');
    }
};
