import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClasses from "../../hooks/useClasses";


const Instructors = () => {
    const [classes] = useClasses();
    return (
        <>
        <SectionTitle
        heading={'Our Instructors'}
        ></SectionTitle>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                classes.map((classItem, _id) => (
                    <div key={_id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={classItem.instructorImage}className="rounded-xl h-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classItem.instructorName}</h2>
                    <p>{classItem.instructorEmail}</p>
                </div>
            </div>
                ))
            }
            
        </section>
        </>
    );
};

export default Instructors;