// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from 'react';
// import Swal from 'sweetalert2';
// // import emailjs from 'emailjs-com';

// const LyricsWebForm = () => {
//     // const [studentData, setStudentData] = useState([]);
//     // const [formData, setFormData] = useState({
//     //     email: '',
//     //     password: ''
//     // });
//     // const [query, setQuery] = useState('');
//     // const [errors, setErrors] = useState({});

//     // useEffect(() => {
//     //     const storedData = localStorage.getItem('studentData');
//     //     if (storedData) {
//     //         setStudentData(JSON.parse(storedData));
//     //     }
//     // }, []);

//     // useEffect(() => {
//     //     localStorage.setItem('studentData', JSON.stringify(studentData));
//     // }, [studentData]);

//     // const formSubmitHandler = (e) => {
//     //     e.preventDefault();

//     //     let newErrors = {};
//     //     Object.keys(formData).forEach((key) => {
//     //         if (!formData[key]) {
//     //             newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required!`;
//     //         }
//     //     });

//     //     if (Object.keys(newErrors).length > 0) {
//     //         setErrors(newErrors);
//     //         return;
//     //     }

//     //     setErrors({});
//     //     const newStudent = {
//     //         email: formData.email.toLowerCase(),
//     //         password: formData.password.toLowerCase(),
//     //     };

//     //     setStudentData([...studentData, newStudent]);

//     //     emailjs
//     //         .send(
//     //             'service_ix25dr9',
//     //             'template_ohy6dpx',
//     //             formData,
//     //             'v5JFU5BhK_V5R8A-v'
//     //         )
//     //         .then((response) => {
//     //             console.log('Email sent successfully:', response);
//     //             Swal.fire({
//     //                 icon: 'success',
//     //                 title: 'Success',
//     //                 text: 'Form submitted and email sent.',
//     //                 showConfirmButton: true,
//     //             });
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error sending email:', error);
//     //             Swal.fire({
//     //                 icon: 'error',
//     //                 title: 'Error',
//     //                 text: 'Failed to send email. Please try again later.',
//     //                 showConfirmButton: true,
//     //             });
//     //         });

//     //     setFormData({ email: '', password: '' });
//     // };

//     // const handleInputChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData({ ...formData, [name]: value });

//     //     setErrors({ ...errors, [name]: '' });
//     // };

//     // const handleDelete = (index) => {
//     //     const updatedData = studentData.filter((_, i) => i !== index);
//     //     setStudentData(updatedData);
//     //     localStorage.setItem('studentData', JSON.stringify(updatedData));
//     // };

//     // const doesObjectContain = (student) => {
//     //     return Object.values(student).some((value) =>
//     //         value.toLowerCase().includes(query.toLowerCase())
//     //     );
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const formSubmitHandler = (e) => {
//         e.preventDefault();

//         let newErrors = {};

//         if (!formData.email) {
//             newErrors.email = 'Email is required!';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Please enter a valid email address!';
//         }

//         if (!formData.password) {
//             newErrors.password = 'Password is required!';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Password must be at least 6 characters long!';
//         }

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Please fix the errors in the form.',
//                 icon: 'error',
//                 confirmButtonText: 'Okay'
//             });
//             return;
//         }
//         setErrors({});
//         Swal.fire({
//             title: 'Success!',
//             text: 'Form submitted successfully.',
//             icon: 'success',
//             confirmButtonText: 'Great!'
//         });

//         console.log('Form submitted successfully', formData);
//     };
//     return (
//         <div className="bg-levender lg:h-screen flex justify-end items-center max-lg:!pb-12">
//             <div className='max-w-[1335px] w-full xl:pr-[27px] md:0 px-[35px]'>
//                 <div className="flex max-lg:flex-wrap xl:justify-between gap-6">
//                     <div className="w-full">
//                         <Link href="/">
//                             <Image className="xl:pb-[138px] pb-[90px] pt-[49px]" src="/assets/images/webp/logo.webp" width={163} height={31.71} alt="logo" />
//                         </Link>
//                         <h2 className="font-semibold text-3xl leading-custom-2xl text-z-black">Welcome Back</h2>
//                         <p className="text-sm font-normal leading-custom-xl text-gray pb-[31px]">Welcome back! Please enter your details.</p>
//                         {/* <form onSubmit={formSubmitHandler} className="max-lg:w-1/2 xl:max-w-[456px] !w-full">
//                    <label className="font-medium text-base leading-5 text-dusk-black flex flex-col mb-[18px] w-full">Email
//                     <input type="email" placeholder="Email" 
//                     className="font-normal text-sm leading-6 placeholder:text-gray outline-none w-full bg-white text-gray mt-1.5 px-3.5 py-5 border border-silver-gray rounded-lg"/>
//                    </label>
//                    <label className="font-medium text-base leading-5 text-dusk-black flex flex-col mb-[18px]">Password
//                     <input type="password" placeholder="Password" 
//                     className="font-normal text-sm leading-6 placeholder:text-gray outline-none w-full bg-white text-gray mt-1.5 px-3.5 py-5 border border-silver-gray rounded-lg"/>
//                    </label>
//                    <div className="flex justify-between flex-wrap gap-3.5 mb-6">
//                    <label className="font-normal text-base font-inter text-dark-gray flex items-center gap-3">
//                     <input type="checkbox" className="size-5 border !border-silver-gray rounded-md outline-none" /> Remember for 30 days
//                    </label>
//                    <button className="font-inter text-base font-normal text-blue">Forgot password</button>
//                    </div>
//                    <button className="font-medium text-white text-sm leading-6 bg-dusk-black w-full rounded-[9px] pt-[9px] pb-2.5">Sign In</button>
//                    <button className="flex gap-[10px] items-center justify-center pt-2.5 pb-[11px] border border-silver-gray rounded-[9px] mt-1.5 w-full text-sm font-medium text-dusk-black"><Image className="size-[22px]" src="/assets/images/svg/google-svg.svg" width={22} height={22} alt="google"/>Sign in with Google</button>
//                    <div className="flex items-center !justify-center mt-[18px]">
//                     <p className="font-inter font-normal text-base text-gray">Don’t have an account?</p>
//                     <button className="text-blue font-normal text-base">Sign up</button>
//                    </div>
//                 </form> */}
//                         <form onSubmit={formSubmitHandler} className="max-lg:w-1/2 xl:max-w-[456px] !w-full">
//                             {/* Email Input */}
//                             <label className="font-medium text-base leading-5 text-dusk-black flex flex-col mb-[18px] w-full">
//                                 Email
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className="font-normal text-sm leading-6 placeholder:text-gray outline-none w-full bg-white text-gray mt-1.5 px-3.5 py-5 border border-silver-gray rounded-lg"
//                                 />
//                                 {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
//                             </label>

//                             {/* Password Input */}
//                             <label className="font-medium text-base leading-5 text-dusk-black flex flex-col mb-[18px]">
//                                 Password
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     className="font-normal text-sm leading-6 placeholder:text-gray outline-none w-full bg-white text-gray mt-1.5 px-3.5 py-5 border border-silver-gray rounded-lg"
//                                 />
//                                 {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
//                             </label>

//                             <div className="flex justify-between flex-wrap gap-3.5 mb-6">
//                                 <label className="font-normal text-base font-inter text-dark-gray flex items-center gap-3">
//                                     <input type="checkbox" className="size-5 border !border-silver-gray rounded-md outline-none" /> Remember for 30 days
//                                 </label>
//                                 <button className="font-inter text-base font-normal text-blue">Forgot password</button>
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="font-medium text-white text-sm leading-6 bg-dusk-black w-full rounded-[9px] pt-[9px] pb-2.5"
//                             >
//                                 Sign In
//                             </button>

//                             {/* Sign in with Google Button */}
//                             <button className="flex gap-[10px] items-center justify-center pt-2.5 pb-[11px] border border-silver-gray rounded-[9px] mt-1.5 w-full text-sm font-medium text-dusk-black">
//                                 <Image className="size-[22px]" src="/assets/images/svg/google-svg.svg" width={22} height={22} alt="google" />
//                                 Sign in with Google
//                             </button>

//                             <div className="flex items-center !justify-center mt-[18px]">
//                                 <p className="font-inter font-normal text-base text-gray">Don’t have an account?</p>
//                                 <button className="text-blue font-normal text-base">Sign up</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="max-lg:w-[48%] lg:block hidden">
//                         <Image className="xl:max-w-[759px] max-w-[590px] h-auto" src="/assets/images/webp/main-image.webp" width={759} height={899} alt="form-main-image" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LyricsWebForm
