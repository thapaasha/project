export default function Footer() {
  return (
    <div className="mt-auto ">
      <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-3 ml-6  justify-between">
        <div className="flex flex-col gap-2">
          <img src="" alt="logo"></img>
          <h1 className="text-2xl font-bold">Mero Homestay</h1>

          <p className=" py-3">
            MeroHomestay provides all the information you need to find the
            perfect homestay for your next trip. You can search for homestays by
            location, amenities, and price, and read reviews from previous
            guests to help you make your decision.{" "}
          </p>
        </div>

        <div className="">
          <h1>Quick Link</h1>
          <ul>
            <li>Home</li>
            <li>Homestay</li>
            <li>Location</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <h1>Contact</h1>
          <ul>
            <li>Parshyang-05, Pokhara</li>
            <li>hello@clinchtech.net</li>
            <li>9802834141</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
