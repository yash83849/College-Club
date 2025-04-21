'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';

const Announcement = () => {

  // initializing formik

  const announcementForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      announcementBy: '',
      image: '',
    },

    onSubmit: (values, {restForm, setSubmitting }) => {

      //setTimeout(() => {
        // console.log(values);
        //resetForm();
      //}, 2000);
      
      //fetch

      axios.post('http://localhost:5000/announcement/add', values)
      .then((result) => {
        toast.success('Announcement posted successfully');
        restForm();
        //router.push('/login');
      }).catch((err) => {
        console.log(err);
        toast.error('Announcement posting failed');
        setSubmitting(false);
      });
    },
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
      announcementForm.setFieldValue('image', res.data.url);
    }
  } 

  return (
    <div className='mx-auto items-center max-w-lg'>
      <>
  
  <title>Create Announcement</title>
  <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
      Create Announcement
    </h2>
    <form  className="space-y-6" onSubmit={announcementForm.handleSubmit}>
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          onChange={announcementForm.handleChange}
          value={announcementForm.values.title}
          placeholder="Enter announcement title"
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          required=""
        />
      </div>
      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          type="text"
          name="description"
          onChange={announcementForm.handleChange}
          value={announcementForm.values.description}
          placeholder="Write your announcement here..."
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          required=""
          defaultValue={""}
        />
      </div>
      {/* Announcement By */}
      <div>
        <label
          htmlFor="announcementBy"
          className="block text-sm font-medium text-gray-700"
        >
          Announcement By
        </label>
        <input
          type="text"
          name="announcementBy"
          onChange={announcementForm.handleChange}
          value={announcementForm.values.announcementBy}
          placeholder="Enter your name"
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          required=""
          defaultValue={""}
        />
      </div>
      {/* Optional Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Attach Image (optional)
        </label>
        <input
          type="file"
          name="image"
          onChange={uploadImage}
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={announcementForm.isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition duration-200"
        >
          {announcementForm.isSubmitting }
          Post Announcement
        </button>
      </div>
    </form>
  </div>
</>

    </div>
  )
}

export default Announcement;
