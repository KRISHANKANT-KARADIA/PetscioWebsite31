import blog_sm from '../assets/blog_sm.svg';
import blogimg from '../assets/blogImgs.svg'
import blogimg2 from '../assets/blogImgs2.svg'
import blogImgs3 from '../assets/blogImgs3.svg'
// import photo from '../assets/photo.svg';
import blogone from '../assets/blogone.svg'
import blogtwo from '../assets/blogtwo.svg'
import blogthree from '../assets/blogthree.svg'





function Media() {
    return (
        <>
            <div className='main'>

                <section className="flex justify-center items-start block_padding ">
                    <div className="max-w-7xl w-full grid lg:grid-cols-[2.5fr_1fr] gap-8">
                        {/* Left Side - Post Card */}
                        <div className="overflow-hidden order-2 lg:order-1">

                            <div className="bg-white rounded-3xl ">
                                {/* Header */}
                                <div className="flex items-center lg:p-8 sm:p-4 p-4" style={{ position: 'absolute' }}>
                                    <img src={blog_sm} alt="profile"
                                        className="lg:w-15 lg:h-15 rounded-full mr-3 sm:w-12 h-12" />
                                    <div>
                                        <h3 className="blog_Speckels">Mr. Speckels</h3>
                                        <p className="blog_ago">2 h ago</p>
                                    </div>
                                </div>

                                <div className="photo_main_main">
                                    <div className="photo_main">
                                        <div className="photo"></div>
                                    </div>
                                </div>


                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img src={blogimg} alt="dog"
                                        className="w-full  object-cover rounded-2xl mx-auto" />
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 lg:px-8 py-5 px-4">
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-pink-600 bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogone} className="w-5" alt="dog"></img>
                                        <p className="sapn_font">1,1k</p>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600  bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogtwo} className="w-5" alt="dog"></img>
                                        <span className="sapn_font">59</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600  bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogthree} className="w-5" alt="dog"></img>
                                        <span className="sapn_font">40</span>
                                    </button>
                                </div>

                                {/* Caption */}
                                <div className="lg:px-8 px-4 pb-6 blog_p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                                    eros ut dolor non. ❤️🎉
                                </div>
                            </div>



                            <div className="bg-white rounded-3xl mt-7 ">
                                {/* Header */}
                                <div className="flex items-center lg:p-8 sm:p-4 p-4" style={{ position: 'absolute' }}>
                                    <img src={blog_sm} alt="profile"
                                        className="lg:w-15 lg:h-15 rounded-full mr-3 sm:w-12 h-12" />
                                    <div>
                                        <h3 className="blog_Speckels">Mr. Speckels</h3>
                                        <p className="blog_ago">2 h ago</p>
                                    </div>
                                </div>

                                <div className="photo_main_main">
                                    <div className="photo_main">
                                        <div className="photo"></div>
                                    </div>
                                </div>


                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img src={blogimg2} alt="dog"
                                        className="w-full object-cover rounded-2xl mx-auto" />
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 lg:px-8 py-5 px-4">
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-pink-600 bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogone} className="w-5" alt="dog"></img>
                                        <p className="sapn_font">1,1k</p>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600  bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogtwo} className="w-5" alt="dog"></img>
                                        <span className="sapn_font">59</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600  bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogthree} className="w-5" alt="dog"></img>
                                        <span className="sapn_font">40</span>
                                    </button>
                                </div>

                                {/* Caption */}
                                <div className="lg:px-8 px-4 pb-6 blog_p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                                    eros ut dolor non. ❤️🎉
                                </div>
                            </div>



                            <div className="bg-white rounded-3xl mt-7 ">
                                {/* Header */}
                                <div className="flex items-center lg:p-8 sm:p-4 p-4" style={{ position: 'absolute' }}>
                                    <img src={blog_sm} alt="profile"
                                        className="lg:w-15 lg:h-15 rounded-full mr-3 sm:w-12 h-12" />
                                    <div>
                                        <h3 className="blog_Speckels">Mr. Speckels</h3>
                                        <p className="blog_ago">2 h ago</p>
                                    </div>
                                </div>

                                <div className="photo_main_main">
                                    <div className="photo_main">
                                        <div className="photo"></div>
                                    </div>
                                </div>


                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img src={blogImgs3} alt="dog"
                                        className="w-full object-cover rounded-2xl mx-auto" />
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 lg:px-8 py-5 px-4">
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-pink-600 bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogone} className="w-5" alt="dog"></img>
                                        <p className="sapn_font">1,1k</p>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600  bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogtwo} className="w-5" alt="dog"></img>
                                        <span className="sapn_font">59</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600  bg-gray-100 px-5 p-2 rounded-full">
                                        <img src={blogthree} className="w-5" alt="dog"></img>
                                        <span className="sapn_font">40</span>
                                    </button>
                                </div>

                                {/* Caption */}
                                <div className="lg:px-8 px-4 pb-6 blog_p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
                                    eros ut dolor non. ❤️🎉
                                </div>
                            </div>






                        </div>









                        {/* Right Side - Notifications */}
                        <div className="bg-white rounded-3xl mb-10 lg:mb-0 h-fit order-1 lg:order-2 lg:sticky lg:top-25 mt-0">
                            <div className="flex items-center mb-4 px-6 pt-6">
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    alt="profile"
                                    className="w-18 h-18 rounded-full mr-3"
                                />
                                <div>
                                    <h3 className="right_name">Mr. Speckels</h3>
                                    <p className="right_p">2 h ago</p>
                                </div>
                            </div>

                            <hr className="my-3" style={{ color: "#00000033", opacity: "50%" }} />


                            <div className="px-8 mt-4">
                                <h4 className="font-semibold text-gray-700 mb-3">Notifications</h4>
                                <div className="mb-3 ">
                                    <h5 className="mb-3 font-semibold text-sm">New</h5>

                                    <div className="space-y-3">
                                        {[
                                            { name: "Brownie", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", day: "20 h" },
                                            { name: "Snowy", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", day: "20 h" },
                                            { name: "Pete The Parrot", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", day: "20 h" },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <img
                                                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "women" : "men"}/${index + 40}.jpg`}
                                                    alt={item.name}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div>
                                                    <p className="text-sm text-gray" style={{ lineHeight: "14px" }}>
                                                        <span className="blog_name">{item.name}</span>   <span className="blog_namep">{item.text} {" "}</span>
                                                        <span role="img" aria-label="emoji">🎉❤️</span>
                                                        <span className="blog_day">{item.day}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h5 className="mb-3 font-semibold text-sm">This week</h5>

                                    <div className="space-y-3">
                                        {[
                                            { name: "Brownie", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", day: "20 h" },
                                            { name: "Snowy", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", day: "20 h" },
                                            { name: "Pete The Parrot", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", day: "20 h" },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <img
                                                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "women" : "men"}/${index + 40}.jpg`}
                                                    alt={item.name}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div>
                                                    <p className="text-sm text-gray" style={{ lineHeight: "14px" }}>
                                                        <span className="blog_name">{item.name}</span>   <span className="blog_namep">{item.text} {" "}</span>
                                                        <span role="img" aria-label="emoji">🎉❤️</span>
                                                        <span className="blog_day">{item.day}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="media_button">
                                    <button className="media_button_right">
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >


        </>
    )
}

export default Media
