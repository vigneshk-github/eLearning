"use client";
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CourseRegistrationData {
    fullName: string;
    email: string;
    phoneNumber: string;
    courseSelection: string;
}

interface FormStatus {
    type: 'success' | 'error' | null;
    message: string;
}

const CourseRegistration = () => {
    const [formData, setFormData] = useState<CourseRegistrationData>({
        fullName: '',
        email: '',
        phoneNumber: '',
        courseSelection: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: null,
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: null, message: '' });

        try {
            const templateParams = {
                to_name: 'Admin', // Replace with recipient name
                from_name: formData.fullName,
                message: `
                Course Registration Details:
                Selected Course: ${formData.courseSelection}
                Email: ${formData.email}
                Phone Number: ${formData.phoneNumber}
                `
            };

            await emailjs.send(
                'service_mef89ia',
                'template_59mlkk5',
                templateParams,
                '9PGmJIUO3qckc9tGr'
            );

            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                courseSelection: ''
            });

            setFormStatus({
                type: 'success',
                message: 'Registration successful! You will receive a confirmation email shortly.'
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setFormStatus({
                type: 'error',
                message: 'Registration failed. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    AI Course Registration
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Register for our specialized AI courses designed for different experience levels
                </p>

                {formStatus.type && (
                    <Alert className={`mb-6 ${formStatus.type === 'success' ? 'bg-green-50 text-green-900' : 'bg-red-50 text-red-900'}`}>
                        <AlertDescription>
                            {formStatus.message}
                        </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Your phone number"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="courseSelection" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Select Course
                        </label>
                        <select
                            id="courseSelection"
                            value={formData.courseSelection}
                            onChange={(e) => setFormData(prev => ({ ...prev, courseSelection: e.target.value }))}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            required
                        >
                            <option value="">Select an AI course</option>
                            <option value="AI for Juniors">AI for Juniors</option>
                            <option value="AI for UG/PG">AI for UG/PG</option>
                            <option value="AI for Professionals">AI for Professionals</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-3 px-5 text-sm font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Registering...' : 'Register Now'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CourseRegistration;