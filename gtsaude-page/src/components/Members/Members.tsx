import CardMembersCarousel from "../UI/CardMembersCarousel";

const Members = () => {
    return (
        <div className="flex flex-col items-center bg-primary-white h-full py-8 gap-12 w-full">
            <div className="flex flex-col items-center gap-6 max-w-4xl py-4">
                <h1 className="text-xl md:text-4xl text-primary-blue text-center font-semibold">Membros</h1>
                <p className="text-base md:text-xl text-primary-blue text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod et, nisi suscipit cupiditate animi reprehenderit ipsam ipsum, itaque alias corrupti
                    repellendus asperiores vitae est consectetur odit expedita veniam officiis! Cupiditate.
                </p>
            </div>
            <div className="flex">
                <CardMembersCarousel />
            </div>
        </div>
    );
}

export default Members