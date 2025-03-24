'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import toast from 'react-hot-toast';

const Addclub = () => {
    // initializing formik
    const clubForm = useFormik({
        initialValues: {
            name: '',
            description: '',
            clubtype: '',
            // createdAt: '',
            logo: '',
            // image: '',
            members: '',
            // events: '',
            createdBy: '',
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {

            // setTimeout(() => {
            // console.log(values);
            // resetForm();
            //}, 2000);

            //fetch
            axios.post('http://localhost:5000/club/add', values)
                .then((result) => {
                    toast.success('Club registered successfully');
                    resetForm();
                    // router.push('/login');
                }).catch((err) => {
                    console.log(err);
                    toast.error('Club registration failed');
                    setSubmitting(false);

                });
            // send values to backend
        },
        //
    });

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'mypreset');
        formData.append('cloud_name', 'dtyeyssrb');

        const res = await axios.post('https://api.cloudinary.com/v1_1/dtyeyssrb/image/upload', formData);

        if (res.status === 200) {
            console.log(res.data);
            toast.success('Image uploaded successfully');
            clubForm.setFieldValue('logo', res.data.url);
        }
    }


    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            ADD CLUB
                        </h2>
                    </div>
                    {/* text - end */}
                    {/* form - start */}
                    <form onSubmit={clubForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="Name"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Club Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={clubForm.handleChange}
                                value={clubForm.values.name}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                onChange={clubForm.handleChange}
                                value={clubForm.values.description}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="category"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Club type
                            </label>
                            <select
                                name="clubtype"
                                onChange={clubForm.handleChange}
                                value={clubForm.values.clubtype}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            >
                                <option value="" label="Select club type" />
                                <option value="Sports" label="Sports" />
                                <option value="Music" label="Music" />
                                <option value="Art" label="Art" />
                                <option value="Technology" label="Technology" />
                                <option value="Literature" label="Literature" />
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="members"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Members
                            </label>
                            <input
                                type="text"
                                name="members"
                                onChange={clubForm.handleChange}
                                value={clubForm.values.members}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        {/* <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="timing"
                                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                                >
                                                    CreatedAt
                                                </label>
                                                <input
                                                    type="text"
                                                    name="timing"
                                                    onChange={clubForm.handleChange}
                                                    value={clubForm.values.createdAt}
                                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                                />
                                            </div> */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="contact"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                CreatedBy
                            </label>
                            <input
                                type="text"
                                name="createdBy"
                                onChange={clubForm.handleChange}
                                value={clubForm.values.createdBy}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="image"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Club Logo
                            </label>
                            <input
                                type="file"
                                onChange={uploadImage}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>


                        <div className="flex items-center justify-between sm:col-span-2">

                            <span className="text-sm text-gray-500"></span>
                        </div>
                        <p className="text-xs text-gray-400">
                            {" "}
                            <a
                                href="#"
                                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                            >

                            </a>
                            .
                        </p>
                        <button
                            type="submit"
                            disabled={clubForm.isSubmitting}
                            className="flex sm:col-span-2 w-1/2 mx-auto items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {clubForm.isSubmitting ? (<IconLoader3 className='animate-spin' />) : (<IconCheck />)}
                            Submit
                        </button>
                    </form>
                    {/* form - end */}
                </div>
            </div>

        </div>
    )
}

export default Addclub;