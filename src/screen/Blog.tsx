
import dogImage from "../assets/blog/blogg.svg";
import img1 from "../assets/blog/b1.jpg";
import img2 from "../assets/blog/b2.jpg";
import img3 from "../assets/blog/b3.jpg";
import img4 from "../assets/blog/b4.jpg";
import img5 from "../assets/blog/b5.jpg";
import img6 from "../assets/blog/b6.jpg";
import img7 from "../assets/blog/b7.jpg";
import img8 from "../assets/blog/b8.jpg";
import { Link } from "react-router-dom";









function Blog() {

    const blogs = [
        {
            id: 1,
            img: img1,
            title: "Lorem ipsum dolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 20th 2020",
        },
        {
            id: 2,
            img: img2,
            title: "Curabitur vel orci",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 21st 2020",
        },
        {
            id: 3,
            img: img3,
            title: "Aliquam commodo",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 22nd 2020",
        },
        {
            id: 4,
            img: img4,
            title: "Praesent nec risus",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 23rd 2020",
        },
        {
            id: 5,
            img: img5,
            title: "Lorem ipsum dolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 20th 2020",
        },
        {
            id: 6,
            img: img6,
            title: "Curabitur vel orci",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 21st 2020",
        },
        {
            id: 7,
            img: img7,
            title: "Aliquam commodo",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 22nd 2020",
        },
        {
            id: 8,
            img: img8,
            title: "Praesent nec risus",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 23rd 2020",
        },
        {
            id: 9,
            img: img1,
            title: "Lorem ipsum dolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 20th 2020",
        },
        {
            id: 10,
            img: img2,
            title: "Curabitur vel orci",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 21st 2020",
        },
        {
            id: 11,
            img: img3,
            title: "Aliquam commodo",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 22nd 2020",
        },
        {
            id: 12,
            img: img4,
            title: "Praesent nec risus",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 23rd 2020",
        },
        {
            id: 13,
            img: img5,
            title: "Lorem ipsum dolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 20th 2020",
        },
        {
            id: 14,
            img: img6,
            title: "Curabitur vel orci",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 21st 2020",
        },
        {
            id: 15,
            img: img7,
            title: "Aliquam commodo",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 22nd 2020",
        },
        {
            id: 16,
            img: img8,
            title: "Praesent nec risus",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus fusce proin lobortis parturient sed odio sapien, nunc. Quam blandit mattis egestas pellentesque commodo.",
            date: "May 23rd 2020",
        },
    ];



    return (
        <>



            <section
                className="relative  
                 lg:h-[700px]
                  flex items-center justify-start 
                  bg-cover bg-center"
                style={{
                    backgroundImage: `url(${dogImage})`,
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    maxHeight: "auto"
                }}
            >



                {/* Gradient Overlay (always stuck to bottom) */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#5b2eff6f] via-[#5b2eff15] to-transparent pointer-events-none"></div>


                {/* Content */}
                <div className="relative z-10 text-white px-6 md:px-20 lg:ps-38 py-10 max-w-1xl container mx-auto">
                    <div className="text-center lg:text-start">
                        <h1
                            className="mb-10 lg:mb-6 text-[70px] leading-[70px] font-[600] mt-20 
                                       sm:text-[80px] md:text-[80px] md:leading-[60px] 
                                       lg:text-[90px] lg:leading-[60px] 
                                       xl:text-[100px] xl:leading-[60px] xl:font-[700]"
                        >
                            Lorem Ipsum
                        </h1>

                        <p className="text-[19px] md:ps-2.5 tracking-[2px] font-[700] uppercase mb-4 mt-15">
                            Lectus lacus, id montes, mauris facilisis
                        </p>

                        <p className="text-[14px] md:ps-2.5 font-[400] mb-6 text-white/90 leading-relaxed">
                            Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut
                            venenatis, volutpat <br /> lorem ut faucibus mauris, quisque.
                            Integer gravida sed quis congue. <br /> Vel risus, arcu a viverra
                            leo id pulvinar ultricies.
                        </p>

                        <button className="px-10 xl:py-4.5 py-3.5 bg-gradient-to-r from-[#8761FC] to-[#4E46F6] text-white rounded-3xl shadow-md hover:shadow-lg transition DOWNLOAD_text">
                            READ NOW
                        </button>
                    </div>
                </div>
            </section>






            {/* Blog Cards Section */}
            < div className="container mx-auto xl:px-40 lg:mt-20 md:mt-12 px-2  lg:mb-15" >

                <div className="mb-8 lg:mb-10">

                    <h2 className="font-Lexend lg:mt-15 mt-15 xl:font-[500]  text-[45px] leading-[36px] tracking-[-0.02em] text-[#1D2538]
                                   sm:text-[60px] sm:leading-[55px]
                                   md:text-[60px] md:leading-[60px]
                                   lg:text-[64px] lg:leading-[60px]
                                   xl:text-[64px] xl:leading-[60px] "
                    >
                        Recent Blogs
                    </h2>

                </div>


                {/* <div className="lg:mb-10 my-3">
                    <h2 className="font-Lexend text-[#1D2538] text-[36px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[65px] font-[500]">
                        Recent Blogs
                    </h2>
                </div> */}

                {/* Responsive Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {blogs.map((blog) => (
                        <Link to={`/BlogDetails/${blog.id}`} key={blog.id}>
                            <div className="bg-white rounded-3xl shadow-[0_6px_15px_rgba(119,65,234,0.2)] overflow-hidden ">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-45 object-cover rounded-3xl"
                                    loading="lazy"  // ✅ Lazy Load Fix
                                />
                                <div className="p-4">
                                    <h2 className="font-[700] text-[22px] mb-3 text-gray-900">
                                        {blog.title}
                                    </h2>
                                    <p className="text-[#000000c0] font-[300] text-[14px] lg:text-[12px] leading-relaxed mb-2">
                                        {blog.desc}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 font-[200] text-[12px]">
                                            {blog.date}
                                        </p>

                                        {/* Remove href="#" - unnecessary reload */}
                                        <span className="text-[#7741EA] font-semibold hover:underline text-sm">
                                            Read more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </ div>




        </>
    )
}

export default Blog


