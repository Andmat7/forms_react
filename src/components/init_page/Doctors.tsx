export function Doctors() {
  return (
    <div className="bg-[#EDF3FE] font-azo w-full m-[15px]">
      <div className="bg-[#60A5F8] h-[50px]">
        <h3 className="font-bold text-white text-[21px] ml-[90px] h-[50px] leading-[50px]">Experienced U.S. Licensed Doctors</h3>
      </div>

      <div className="flex justify-end">
        <div className="ml-[90px] w-[340px] ">
          <p className="font-italic text-[14px] mt-[30px]">
            “I firmly believe that managing weight should be straightforward and accessible for anyone who seeks it. That’s why our program at SkinnyRx is exceptional—you can receive FDA-approved, clinically-proven semaglutide treatment delivered directly to your doorstep at a fraction of the usual cost.”
          </p>
        </div>

        <img src="doctor.png" alt="logo" />
      </div>
    </div>
  );
}
