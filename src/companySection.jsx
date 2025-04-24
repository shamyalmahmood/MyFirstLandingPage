import React, { useEffect, useRef } from 'react';

const initTranslateLTR = -48 * 4;
const initTranslateRTL = 36 * 4;

function CompanySection() {

    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    useEffect(() => {
        function setupIntersectionObserver(element, isLTR, speed) {
            function scrollHandler() {
                const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
                let totalTranslate = 0;
                
                if (isLTR) {
                    totalTranslate = translateX + initTranslateLTR;
                } else {
                    totalTranslate = -(translateX + initTranslateRTL);
                }
                
                element.style.transform = `translateX(${totalTranslate}px)`;
            }

            const intersectionCallback = (entries) => {
                const isIntersecting = entries[0].isIntersecting;
                if (isIntersecting) {
                    window.addEventListener('scroll', scrollHandler);
                } else {
                    window.removeEventListener('scroll', scrollHandler);
                }
            };

            const intersectionObserver = new IntersectionObserver(intersectionCallback);
            intersectionObserver.observe(element);

            return () => {
                intersectionObserver.unobserve(element);
                window.removeEventListener('scroll', scrollHandler);
            };
        }

        const line1 = line1Ref.current;
        const line2 = line2Ref.current;
        const line3 = line3Ref.current;

        if (line1) setupIntersectionObserver(line1, true, 0.15);
        if (line2) setupIntersectionObserver(line2, false, 0.15);
        if (line3) setupIntersectionObserver(line3, true, 0.15);

        return () => {
            if (line1) window.removeEventListener('scroll', () => {});
            if (line2) window.removeEventListener('scroll', () => {});
            if (line3) window.removeEventListener('scroll', () => {});
        };
    }, []);

    return(
        <div className="overflow-x-hidden">
            <div id="company-container" className="flex flex-col gap-8">
                <div id="company-titles" className="flex justify-center gap-2">
                    <img className="translate-y-2" src="./assets/asset 2.svg"/>
                    <span className="font-bold">APPS POWERED BY TODESKTOP</span>
                    <img className="-scale-x-100 translate-y-2" src="./assets/asset 2.svg"/>
                </div>

                <div id="company-lines" className="flex flex-col gap-4 ">
                    <div ref={line1Ref} id="line1" className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 3.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 4.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 5.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 6.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 7.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 8.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 9.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 10.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 11.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 12.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 13.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 14.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                    </div>

                    <div ref={line2Ref} id="line2" className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 15.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 16.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 17.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 18.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 19.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 20.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 21.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 22.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 23.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 24.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 25.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 26.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                    </div>

                    <div ref={line3Ref} id="line3" className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 27.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 28.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 29.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 30.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 47.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 32.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 51.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 34.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 35.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 36.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 37.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src="./assets/asset 38.png"/>
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CompanySection