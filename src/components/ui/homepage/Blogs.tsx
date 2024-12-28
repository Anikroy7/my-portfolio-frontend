import React from 'react'
import Loading from '../shared/Loading';
import { useGetAllBlogs } from '@/src/hooks/blog.hook';
import { blogs } from '@/src/app/constant';

export default function Blogs() {
    const { data, isPending } = useGetAllBlogs();

    if (isPending) return <Loading />
    // const blogs = data?.data || []
    return (
        <section className="p-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Recent Blog Posts</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={blogs[0].image} // Use the dynamic image
                            alt="Blog Image"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-500">Anik Roy •  {new Date(blogs[0].createdAt).toLocaleDateString()}</p>                            <h3 className="mt-2 text-xl font-semibold">{blogs[0].title}</h3> 
                            <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: blogs[0].description }} /> 
                            <div className="mt-4 flex space-x-2">
                                {blogs[0].categories.map((category, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                        {category}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {
                            blogs.slice(1, 4).map((blog) => <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={blog.image} 
                                    alt="Blog Image"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-sm text-gray-500">Anik Roy •  {new Date(blog.createdAt).toLocaleDateString()}</p>                            <h3 className="mt-2 text-xl font-semibold">{blog.title}</h3> 
                                    <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: blog.description }} /> 
                                    <div className="mt-4 flex space-x-2">
                                        {blog.categories.map((category, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>)
                        }



                    </div>
                </div>
            </div>
        </section>

    )
}
