import React from "react";

const RecyclingMap = () => {
  return (
    <section className="w-full h-auto p-4">
      <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px]">
        <iframe
          id="map"
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.000000000004!2d-0.119543!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0x3333333333333333!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1633333333333!5m2!1sen!2suk"
          allowFullScreen={true}
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default RecyclingMap;
