'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';

const Addclub = () => {

  // initializing formik

  const clubForm = useFormik({
    initialValues:{
      name: '',
      description: '',
      logo: '',
      category: '',
      createdBy: '',
      members:'',
      events:'',
      createdAt:'',
      updatedAt:''
    },

    onSubmit: (values, { resetForm, SetSubmitting }) => {

      // setTimeout(() => {
      // console.log(values);
      // resetForm();
      //}, 2000);

      // fetch

      axios.post('http://localhost:5000/club/add', values)
      .then((result) => {
        toast.success('Club registered successfully');
        resetForm();
        //router.push('/login');
      }).catch((err) => {
        console.log(err);
        toast.error('Club registration failed');
        SetSubmitting(false);

      });

      // send values to backend
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
              Add Club
            </h2>
          </div>
         
          {/* text - end */}
         
          {/* form - start */}
          
          <form onSubmit={clubForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            
            {/* name section start */}
           
            <div>
              <label
                htmlFor="Name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={clubForm.handleChange}
                value={clubForm.values.name}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* name section end */}

            {/* description section start */}

            <div>
              <label
                htmlFor="Description"
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

            {/* description section end */}

            {/* category section start */}

            <div className="sm:col-span-2">
              <label
                htmlFor="Category"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                onChange={clubForm.handleChange}
                value={clubForm.values.category}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* category section end */}

            {/* createdBy dection start */}

            <div>
              <label
                htmlFor="CreatedBy"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                CreatedBy
              </label>
              <input
                type="text"
                name="createdby"
                onChange={clubForm.handleChange}
                value={clubForm.values.createdBy}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* createdBy section end */}

            {/* members section start */}

            <div>
              <label
                htmlFor="Members"
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

            {/* members section end */}

            {/* events section start */}

            <div className="sm:col-span-2">
              <label
                htmlFor="Events"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
               Events
              </label>
              <input
                type="text"
                name="events"
                onChange={clubForm.handleChange}
                value={clubForm.values.events}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* events section end */}

            {/* logo section start */}

            <div className="sm:col-span-2">
              <label
                htmlFor="Logo"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Logo
              </label>
              <input
                type="file"
                onChange={uploadImage}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            {/* logo section end */}


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
