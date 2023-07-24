import React from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../../components/atoms/Loader";
import Swal from "sweetalert2";

const BlogForm = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [title, setTitle] = useState('');
    const [path, setPath] = useState('');
    const [instagramLink, setInstagramLink] = useState('https://www.instagram.com/_shhyy__mm_640_/');
    const [linkedinLink, setLinkedinLink] = useState('https://www.linkedin.com/in/itsshyam640/');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');

    const handleBlogSubmit = async (e) => {
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

            // You can use fetch or any other AJAX method to upload the image to Cloudinary
            await fetch('https://api.cloudinary.com/v1_1/ratnesh035/image/upload', {
                method: 'POST',
                body: imageData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const imageUrl = data.url;
                    const formData = {
                        title,
                        path,
                        instagram_link: instagramLink,
                        linkedin_link: linkedinLink,
                        tags,
                        description,
                        image: imageUrl
                    }
                    axios.post('/api/blog', formData, config);
                })
                .catch(error => console.error(error));

            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Blog Submitted Successfully",
                showConfirmButton: true,
                timer: 3000,
            });
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error Saving Blog " + error.message,
                showConfirmButton: true,
                timer: 3000,
            });
        }
    };
    return (
        <section className="my-8 md:my-48 bg-transparent w-full my-36" id="blog">
            {loading && <Loader />}
            <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Upload Blog
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={handleBlogSubmit}>
                            <div>
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Title</label>
                                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Title" required="true" />
                            </div>
                            <div>
                                <label for="path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Path</label>
                                <input type="text" name="path" id="path" onChange={(e) => setPath(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Path" required="true" />
                            </div>
                            <div>
                                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Cover Image</label>
                                <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload Cover Image" />
                            </div>
                            <div>
                                <label for="instagram_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Instagram Link</label>
                                <input type="url" name="instagram_link" id="instagram_link" onChange={(e) => setInstagramLink(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Instagram Link" />
                            </div>
                            <div>
                                <label for="linkedin_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Linkedin Link</label>
                                <input type="url" name="linkedin_link" id="linkedin_link" onChange={(e) => setLinkedinLink(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Linkedin Link" />
                            </div>
                            <div>
                                <label for="tags" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Space Seperated Tags with # sign</label>
                                <input type="text" name="tags" id="tags" onChange={(e) => setTags(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter space seperate Tags" />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Description</label>
                                <textarea
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="5"
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter Description"
                                    required
                                >
                                </textarea>
                            </div>

                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Submit Blog</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogForm;