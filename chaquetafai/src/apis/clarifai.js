const CLARIFAI_API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

// Convierte la imagen a base64
export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]); // Solo la parte base64
        reader.onerror = reject;
    });
};

// Solicita a Clarifai que identifique alimentos en la imagen
export const identifyFoodWithClarifai = async (base64Image) => {
    try {
        const response = await fetch('https://api.clarifai.com/v2/models/food-item-recognition/outputs', {
            method: 'POST',
            headers: {
                'Authorization': `Key ${CLARIFAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inputs: [{ data: { image: { base64: base64Image } } }],
            }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error('Error al identificar el alimento');
        return data.outputs[0].data.concepts; // Retorna los alimentos detectados
    } catch (error) {
        console.error('Error en la API de Clarifai:', error);
        throw error;
    }
};
