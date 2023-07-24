import { React, useState } from "react";
import axios from "axios";
import Loader from '../../components/atoms/Loader';
import Swal from "sweetalert2";

const ProjectForm = () => {
    const [loading, setLoading] = useState(false);
    const [mainImage, setMainImage] = useState(null);
    const [multipleImages, setMultipleImages] = useState([]);
    const [features, setFeatures] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [title, setTitle] = useState('https://www.instagram.com/_shhyy__mm_640_/');
    const [description, setDescription] = useState('https://www.linkedin.com/in/itsshyam640/');
    const [category, setCategory] = useState('');
    const [liveLink, setLiveLink] = useState('');
    const [codeLink, setCodeLink] = useState('');

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                header: {
                    "Content-type": "application/json"
                }
            }
            setLoading(true);

            const multipleImagesUrls = [];
            for (const image of multipleImages) {
                const formData = new FormData();
                formData.append('file', image);
                formData.append('upload_preset', 'portfolio_images');
                formData.append('folder', 'project_images');
                const imageResponse = await axios.post(
                    'https://api.cloudinary.com/v1_1/ratnesh035/image/upload',
                    formData
                );
                multipleImagesUrls.push(imageResponse.data.secure_url);
            }

            const file = mainImage;
            const imageData = new FormData();
            imageData.append('file', file);
            imageData.append('upload_preset', 'portfolio_images');

            // You can use fetch or any other AJAX method to upload the image to Cloudinary
            await fetch('https://api.cloudinary.com/v1_1/ratnesh035/image/upload', {
                method: 'POST',
                body: imageData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const imageUrl = data.secure_url;
                    const formData = {
                        mainImage: imageUrl,
                        images: multipleImagesUrls,
                        features,
                        technologies,
                        title,
                        description,
                        category,
                        liveLink,
                        codeLink
                    }
                    axios.post('/api/project', formData, config);
                })
                .catch(error => console.error(error));
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Project Submitted Successfully",
                showConfirmButton: true,
                timer: 3000,
            });
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error saving project " + error.message,
                showConfirmButton: true,
                timer: 3000,
            });
        }
    };
    return (
        <section class="my-8 md:my-72 bg-transparent w-full" id="blog">
            {loading && <Loader />}
            <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Upload Project
                        </h1>
                        <form class="space-y-4 " onSubmit={handleProjectSubmit}>
                            <div>
                                <label for="mainImage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Main Image</label>
                                {/* <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    dropzoneText="Drag and drop a single image here or click"
                                    onChange={handleSingleImageUpload}
                                    filesLimit={1}
                                /> */}
                                <input type="file" name="mainImage" id="mainImage" onChange={(e) => setMainImage(e.target.files[0])} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload Main Image" />
                            </div>
                            <div>
                                <label for="images" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add multiple Description Images</label>
                                {/* <DropzoneArea
                                clsssName='w-full h-20'
                                    acceptedFiles={['image/*']}
                                    dropzoneText="Drag and drop multiple images here or click"
                                    onChange={handleMultipleImageUpload}
                                /> */}
                                <input type="file" name="images" multiple="multiple" id="images" onChange={(e) => setMultipleImages(e.target.files)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload Images" />
                            </div>
                            <div>
                                <label for="features" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Features</label>
                                <textarea type="text" cols="30" rows="5" name="features" id="features" onChange={(e) => setFeatures(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="List Features"></textarea>
                            </div>
                            <div>
                                <label for="technologies" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies</label>
                                <textarea type="text" cols="30" rows="5" name="technologies" id="technologies" onChange={(e) => setTechnologies(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="List Technologies"></textarea>
                            </div>
                            <div>
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
                                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Title" required />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                                <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Description" required />
                            </div>
                            <div>
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Category</label>
                                <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Category" />
                            </div>
                            <div>
                                <label for="liveLink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Live Link</label>
                                <input type="url" name="liveLink" id="liveLink" onChange={(e) => setLiveLink(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Live Link" />
                            </div>
                            <div>
                                <label for="codeLink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Link</label>
                                <input type="url" name="codeLink" id="codeLink" onChange={(e) => setCodeLink(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Code Link" />
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bord`er-blue-500">Submit Project</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectForm;