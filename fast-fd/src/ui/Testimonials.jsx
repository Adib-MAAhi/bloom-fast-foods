import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function StarRating({ rating }) {
    return (
        <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`text-xl ${
                        index < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fakeData = [
                {
                    id: 1,
                    name: "John Doe",
                    feedback: "The best burgers in town! Fresh, juicy, and absolutely delicious.",
                    rating: 5,
                    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                },
                {
                    id: 2,
                    name: "Jane Smith",
                    feedback: "Fast service and amazing flavors. My family loves it!",
                    rating: 4,
                    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                },
                {
                    id: 3,
                    name: "Michael Brown",
                    feedback: "Great atmosphere and even better food. Highly recommend!",
                    rating: 5,
                    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
                },
                {
                    id: 4,
                    name: "Emily Davis",
                    feedback: "Perfect for a quick bite or a family meal. Exceptional service!",
                    rating: 4,
                    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
                },
            ];
            setTestimonials(fakeData);
        };
        fetchData();
    }, []);

    return (
        <div className="bg-gray-50 py-8 px-4" id="testimonials">
            <h2 className="text-center text-2xl font-bold text-orange-600">
                What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {testimonials.map(({ id, name, feedback, rating, avatar }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 shadow-md rounded-lg text-center"
                    >
                        <img
                            src={avatar}
                            alt={name}
                            className="w-16 h-16 mx-auto rounded-full mb-4"
                        />
                        <p className="text-stone-600 italic">"{feedback}"</p>
                        <StarRating rating={rating} />
                        <h4 className="text-orange-600 mt-4 font-semibold">
                            - {name}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
