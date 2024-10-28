import { useState } from 'react';
import ImageUpload from './ImageUpload';
import { getBase64, identifyFoodWithClarifai } from '../apis/clarifai';

function Home() {
    const [image, setImage] = useState(null);
    const [foodData, setFoodData] = useState(null);
    const [error, setError] = useState('');

    const handleImageUpload = async (uploadedImage) => {
        if (!uploadedImage) return setError('El archivo no es válido');
       
        try {
            setImage(uploadedImage);
            const base64Image = await getBase64(uploadedImage);
            const foodConcepts = await identifyFoodWithClarifai(base64Image);
            setFoodData(foodConcepts);
            setError('');
        } catch {
            setError('Error al identificar el alimento');
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

            <ImageUpload onImageUpload={handleImageUpload} />

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

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Home;