export default function Footer() {
  return (
    <div className="px-2 py-6">
      <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-3 ml-6  justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-6">
            <img src="" alt="logo"></img>
            <div>
              <h1 className=" md:text-lg lg:text-md font-bold font-serif">
                MERO HOMESTAY
              </h1>
              <p className=" md:text-[0.5rem]">
                Find your perfect home away from home
              </p>
            </div>
          </div>

          <p className="font-sans py-3">
            MeroHomestay provides all the information you need to find the
            perfect homestay for your next trip. You can search for homestays by
            location, amenities, and price, and read reviews from previous
            guests to help you make your decision.{" "}
          </p>
        </div>

        <div className="space-y-2 ">
          <h1 className="font-bold">Quick Link</h1>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Homestay</li>
            <li>Location</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold">Contact</h1>
          <ul className="space-y-1">
            <li>Parshyang-05, Pokhara</li>
            <li>hello@clinchtech.net</li>
            <li>9802834141</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
