import { useState } from 'react';
import ImageUpload from './ImageUpload'; // Importamos el componente de carga de imágenes
import { getBase64, identifyFoodWithClarifai } from '../apis/clarifai'; // Importamos nuestras funciones de Clarifai

function Home() {
    const [image, setImage] = useState(null);
    const [foodData, setFoodData] = useState(null); // Estado para almacenar los datos de Clarifai
    const [error, setError] = useState(null); // Para manejar errores

    // Función para manejar la subida de imagen
    const handleImageUpload = async (uploadedImage) => {
        if (uploadedImage && uploadedImage instanceof File) {
            setImage(uploadedImage);
            console.log('Imagen subida:', uploadedImage); // Aquí se verá el archivo en la consola

            try {
                const base64Image = await getBase64(uploadedImage); // Convertimos a base64
                const foodConcepts = await identifyFoodWithClarifai(base64Image); // Llamamos a Clarifai
                setFoodData(foodConcepts); // Guardamos los datos del alimento
                setError(null); // Limpiamos errores si la solicitud fue exitosa
            } catch (err) {
                setError('Error al identificar el alimento');
                console.error(err);
            }
        } else {
            setError('El archivo no es válido');
            console.error('El archivo no es válido');
        }
    };

    return (
        <div>
            <center>
                <header>
                    <h1>Bienvenido a FoodWise</h1>
                    <p>La mejor calculadora de macros</p>
                </header>
            </center>

            <section>
                <ImageUpload onImageUpload={handleImageUpload} />
            </section>

            {image && (
                <section>
                    <h3>Imagen seleccionada:</h3>
                    <img 
                        src={URL.createObjectURL(image)} 
                        alt="Comida subida" 
                        style={{ width: '300px', height: 'auto' }} 
                    />
                </section>
            )}

            {foodData && (
                <section>
                    <h3>Alimentos identificados:</h3>
                    <ul>
                        {foodData.map((food, index) => (
                            <li key={index}>
                                {food.name} - {Math.round(food.value * 100)}% de certeza
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {error && (
                <section>
                    <p style={{ color: 'red' }}>{error}</p>
                </section>
            )}
        </div>
    );
}

export default Home;
