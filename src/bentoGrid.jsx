function BentoGrid(){
    return (
        <div id="bento-grid" className="container">
            <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">ToDesktop handles the details</h2>
            
            <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3" style={{ gridAutoRows: '96px' }}>
                <div className="row-start-1 row-end-3 rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                    <div className="rounded-2xl bg-white w-full h-full py-6 flex flex-col gap-4 items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                        <h3 className="text-2xl">Native Notification</h3>
                        <img src="./assets/asset 37.png"/>
                    </div>
                </div>

                <div className="row-start-1 row-end-4 rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                    <div className="rounded-2xl bg-white w-full h-full py-6 flex flex-col gap-4 items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                        <h3 className="text-2xl">Auto Updates</h3>
                        <p className="text-lg font-light text-center">We'll ensure that the underlying browser is up to dateand deliver performance improvements, security patches & additional features</p>
                        <img src="./assets/asset 37.png"/>
                    </div>
                </div>

                <div className="row-start-1 row-end-3 rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                    <div className="rounded-2xl bg-white w-full h-full py-6 flex flex-col gap-4 items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                        <h3 className="text-2xl">Plugins</h3>
                        <img src="./assets/asset 37.png"/>
                    </div>
                </div>

                <div className="row-start-3 row-end-6 rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                    <div className="rounded-2xl bg-white w-full h-full py-6 flex flex-col gap-4 items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                        <h3 className="text-2xl">Access to Native APIs</h3>
                        <p className="text-lg font-light text-center">ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
                        <img src="./assets/asset 37.png"/>
                    </div>
                </div>

                <div className="row-start-4 row-end-6 rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                    <div className="rounded-2xl bg-white w-full h-full py-6 flex flex-col gap-4 items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                        <h3 className="text-2xl">Customizable look and feel</h3>
                        <img src="./assets/asset 37.png"/>
                    </div>
                </div>

                <div className="row-start-3 row-end-6 rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                    <div className="rounded-2xl bg-white w-full h-full py-6 flex flex-col gap-4 items-center hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50">
                        <h3 className="text-2xl">Native Installers</h3>
                        <p className="text-lg font-light text-center">We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
                        <img src="./assets/asset 37.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BentoGrid