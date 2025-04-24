function Pricing() {
return(
        <div id="pricing" className="container">
            <h2 className="text-5xl max-w-2xl leading-normal sm:font-semibold">Choose a plan that fits your needs</h2>

            <div className="flex flex-col lg:flex-row mt-6 gap-8">
                <div className="border bg-slate-50 rounded-xl px-8 pt-12 pb-8 flex flex-1 w-full flex-col gap-6">
                    <h3 className="text-4xl font-bold">Free</h3>
                    
                    <p className="font-light text-lg text-gray-500">For personal use or testing your app before deploying to customers.</p>
                    
                    <p className="uppercase text-gray-500">Key Features</p>

                    <ul className="space-y-3 text-gray-800">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Free for personal use</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Run app locally</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"/>
                            <span>No Code Signing</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"/>
                            <span>No Native Installers</span>
                        </li>
                    </ul>

                    <button className="px-8 py-3 mt-7 border text-primary rounded-lg hover:border-gray-300 font-display font-semibold">Get Started</button>
                </div>

                <div className="border bg-slate-50 rounded-xl px-8 pt-12 pb-8 flex flex-1 w-full flex-col gap-6">
                    <h3 className="text-4xl font-bold">Essential</h3>
                    
                    <p className="font-light text-lg text-gray-500">For simple desktop apps.</p>

                    <p className="text-gray-800 font-display"> <span className="text-black text-2xl font-semibold"> $99</span> /month</p>
                    
                    <p className="uppercase text-gray-500">Key Features</p>

                    <ul className="space-y-3 text-gray-800">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Windows, Mac & Linux</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Code Signing</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Email/chat support</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Native Installers</span>
                        </li>
                    </ul>

                    <button className="px-8 py-3 border text-primary rounded-lg hover:border-gray-300 font-display font-semibold">Get Started</button>
                </div>

                <div className="border bg-slate-50 relative rounded-xl px-8 pt-12 pb-8 flex flex-1 w-full flex-col gap-6">
                    <p className="text-orange-800 bg-orange-300 text-sm rounded-full w-fit px-4 py-2 font-display font-bold absolute top-0 right-8 -translate-y-1/2">Most Popular</p>

                    <h3 className="text-4xl font-bold">Professional</h3>
                    
                    <p className="font-light text-lg text-gray-500">For sophisticated desktop apps.</p>

                    <p className="text-gray-800 font-display"> <span className="text-black text-2xl font-semibold"> $240</span> /month</p>
                    
                    <p className="uppercase text-gray-500">EVERYTHING IN ESSENTIAL PLUS</p>

                    <ul className="space-y-3 text-gray-800">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Plugins</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Branded Download links</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Analytics</span>
                        </li>

                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"/>
                            <span>Access to restricted API</span>
                        </li>
                    </ul>

                    <button className="px-8 py-3 border bg-primary text-white rounded-lg hover:bg-opacity-90 font-display font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    );
}
export default Pricing