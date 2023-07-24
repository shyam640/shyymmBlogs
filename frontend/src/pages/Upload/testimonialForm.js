import React, { useState } from "react";
import axios from "axios";
import Loader from '../../components/atoms/Loader';
import Swal from "sweetalert2";

const TestimonialForm = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('https://res.cloudinary.com/ratnesh035/image/upload/v1690034415/user_logo.png');


    const handleTestimonialSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                header: {
                    "Content-type": "application/json"
                }
            }
            setLoading(true);
            const file = image;
            const imageData = new FormData();
            imageData.append('file', file);
            imageData.append('upload_preset', 'portfolio_images');

            await fetch('https://api.cloudinary.com/v1_1/ratnesh035/image/upload', {
                method: 'POST',
                body: imageData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const imageUrl = data.url;
                    const testimonialData = {
                        name,
                        position, 
                        description, 
                        image: imageUrl
                    }
                    axios.post('/api/testimonial', testimonialData, config);
                })
                .catch(error => console.error(error));
            
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Testimonial Submitted Successfully",
                showConfirmButton: true,
                timer: 3000,
            });
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error saving testimonial " + error.message,
                showConfirmButton: true,
                timer: 3000,
            });
        }
    };
    return (
        <section class="bg-transparent w-full" id="blog">
            {loading && <Loader />}
            <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Upload Testinomial
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={handleTestimonialSubmit}>
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="true" />
                            </div>
                            <div>
                                <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Position</label>
                                <input type="text" name="position" id="position" onChange={(e) => setPosition(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Position" required="true" />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                                <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message" required="true" />
                            </div>
                            <div>
                                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Profile Image</label>
                                <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Submit Testinomial</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialForm;