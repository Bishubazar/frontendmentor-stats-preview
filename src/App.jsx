import { data } from "./constants";

function App() {
    // console.log(data);
    return (
        <main className="flex items-center justify-center w-screen h-screen">
            <section className="flex flex-col-reverse justify-between w-full max-w-6xl grid-cols-1 m-5 overflow-hidden rounded-lg sm:gap-8 sm:flex-row bg-violet-dark sm:grid-cols-2">
                <div className="flex flex-col justify-between gap-4 p-6 py-8 text-center sm:text-left sm:p-20 sm:basis-1/2 sm:order-2">
                    <h1 className="text-2xl font-bold tracking-wider text-white sm:text-4xl">
                        Get <span className="text-violet-soft">insight</span>{" "}
                        that help your business grow.
                    </h1>
                    <p className="pb-4 pr-0 text-xs leading-6 sm:pb-10 sm:text-base sm:pr-5">
                        Discover the benefits fo data analytics and make better
                        decision regarding revenue, customer experience, and
                        overall efficiency.
                    </p>
                    <div className="flex flex-col justify-between gap-5 sm:flex-row">
                        {data.map((el) => (
                            <div
                                key={el.title}
                                className="flex flex-col gap-1 pr-0 sm:pr-10"
                            >
                                <h2 className="text-xl font-bold text-white sm:text-2xl">
                                    {el.number}
                                </h2>
                                <h3 className="text-xs uppercase sm:text-sm title">
                                    {el.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative order-1 sm:order-2 sm:basis-1/2 ">
                    <img
                        src="/images/image-header-desktop.jpg"
                        alt=""
                        className="hidden object-cover size-full sm:block"
                    />
                    <img
                        src="/images/image-header-mobile.jpg"
                        alt=""
                        className="block object-cover size-full sm:hidden"
                    />
                    <span className="absolute top-0 left-0 bg-purple-900/60 size-full"></span>
                    {/* <span className="absolute top-0 left-0 bg-violet-dark/30 size-full"></span> */}
                </div>
            </section>
        </main>
    );
}

export default App;
