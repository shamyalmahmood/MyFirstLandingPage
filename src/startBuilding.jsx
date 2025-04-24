function StartBuilding() {
return (
    <div className="container rounded-xl bg-black flex flex-col lg:flex-row pt-6 lg:pt-10">
                <div id="left" className="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
                    <span className="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
                    
                    <h2 className="text-4xl font-bold text-slate-100 leading-tight lg:text-5xl">Create your desktop app for free*</h2>

                    <p className="text-lg font-light text-gray-400 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>

                    <button className="bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
                        <i className="fa-solid fa-download"/>
                        <span>Download ToDesktop Builder</span>
                    </button>

                    <p className="text-gray-400 text-xs leading-tight italic">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
                </div>

                <div id="right" className="lg:w-1/2">
                    <img src="./assets/asset 46.png" className="pl-12"/>
                </div>
    </div>
    );
}
export default StartBuilding