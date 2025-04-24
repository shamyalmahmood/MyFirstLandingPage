function CustomerStories() {
    return(
        <div id="testimonials" className="container">
            <h2 className="text-5xl sm:font-semibold mb-4">Customer Stories</h2>
            
            <div className="rounded-xl border flex flex-col lg:flex-row items-end">
                <div id="left" className="flex flex-col gap-12 p-8">
                    <div className="h-4 w-fit">
                        <img src="./assets/asset 44.svg"/>
                    </div>
                    
                    <h3 className="text-xl leading-relaxed">ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                    
                    <div id="tag-container" className="flex gap-3 flex-wrap">
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"/>
                            <span className="font-display font-medium">Chromeless UI</span>
                        </div>

                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"/>
                            <span className="font-display font-medium">Native spellcheck</span>
                        </div>

                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"/>
                            <span className="font-display font-medium">Task time in menubar</span>
                        </div>

                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"/>
                            <span className="font-display font-medium">Notification count in the dock</span>
                        </div>

                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"/>
                            <span className="font-display font-medium">Global hotkey to create task</span>
                        </div>
                    </div>

                    <p className="text-lg font-light text-gray-500">“ToDesktop provided us with a <span className="text-gray-800">polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className="text-gray-800">new and improved features</span> to our customers within days.”</p>

                    <div id="user-card" className="flex gap-4">
                        <div className="w-12">
                            <img src="./assets/asset 45.jpeg" className="rounded-full"/>
                        </div>

                        <div className="flex flex-col">
                            <h3>Zeb Evans</h3>
                            <p className="text-gray-500">Founder & CEO, <a href="#" className="anchor-hover">ClickUp</a></p>
                        </div>
                    </div>
                </div>

                <div id="right" className="">
                    <img src="./assets/asset 46.png" className="pl-12"/>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
                <div className="flex rounded-2xl flex-1 w-full gradient-hover-outer">
                    <div className="rounded-2xl p-6 gradient-hover-inner flex flex-1 w-full flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-300 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-code text-orange-800"/>
                            </div>

                            <h3 className="text-2xl font-semibold">Native APIs</h3>
                        </div>

                        <p className="text-lg font-light">"What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience."</p>

                        <div className="flex gap-4">
                        <div className="flex">
                            <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="./assets/asset 47.png" className="min-w-16 min-h-16"/>
                            </div>

                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                <img src="./assets/asset 48.jpeg"/>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3>Rick Pastoor</h3>
                            <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="flex rounded-2xl flex-1 w-full gradient-hover-outer">
                    <div className="rounded-2xl p-6 gradient-hover-inner flex flex-1 w-full flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-300 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-code text-orange-800"/>
                            </div>

                            <h3 className="text-2xl font-semibold">Cleaner, less cluttered UI</h3>
                        </div>

                        <p className="text-lg font-light">"Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. It was a no-brainer for us to use ToDesktop. ”</p>

                        <div className="flex gap-4">
                        <div className="flex">
                            <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="./assets/asset 49.png" className="min-w-16 min-h-16"/>
                            </div>

                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                <img src="./assets/asset 50.jpeg"/>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3>Max Musing</h3>
                            <a href="#" className="anchor-hover w-fit text-gray-500">Basedash</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="flex rounded-2xl flex-1 w-full gradient-hover-outer">
                    <div className="rounded-2xl p-6 gradient-hover-inner flex flex-1 w-full flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-300 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-code text-orange-800"/>
                            </div>

                            <h3 className="text-2xl font-semibold">Code optional</h3>
                        </div>

                        <p className="text-lg font-light">"It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries.”</p>

                        <div className="flex gap-4">
                        <div className="flex">
                            <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="./assets/asset 51.png" className="min-w-16 min-h-16"/>
                            </div>

                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                <img src="./assets/asset 52.jpeg"/>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3>Pouya Rad</h3>
                            <a href="#" className="anchor-hover w-fit text-gray-500">LifeAt</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CustomerStories