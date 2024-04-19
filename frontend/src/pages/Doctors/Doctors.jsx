import React, { useEffect } from "react";
import { useState } from "react";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
// import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const Doctors = () => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [query, setQuery] = useState("");
  const [deQuery, setDeQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());

    console.log('handle search');
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]); 

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${deQuery}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-3 pr-2 bg-transparent w-full focus:outline-none cursor pointer placeholder:text-textClr"
              placeholder="Search for a Doctor by name or specialization"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />

            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loading />}
          {error && <Error errMessage={error} />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our patients say about us
            </h2>
            <p className="text_para text-center">
              True, unfiltered and raw opinion of our dear patients. Shows true
              reflection of the effect that our system has on them. The
              testimonials are unedited and presented int the same manner as
              written by the patients.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
