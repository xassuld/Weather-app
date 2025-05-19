import { House, MapPin, Heart, User, Search } from "lucide-react";
import { useState } from "react";

const WeatherApp = () => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="flex justify-center items-center relative">
      {/* Orange Ball */}
      <div className="absolute top-[120px] left-[265px] flex z-10">
        <img src="orange-ball.png" alt="" className="w-[176px] h-[176px]" />
      </div>

      {/* Purple Ball */}
      <div className="absolute bottom-[120px] right-[265px] flex z-10">
        <img src="purple-ball.png" alt="" className="w-[176px] h-[176px]" />
      </div>

      {/* Pinecone Logo */}
      <div className="absolute flex gap-[16px] w-[940px] h-[940px] justify-center items-center z-20">
        <img src="vector-1.png" alt="" className="w-[43.289px] h-[86px]" />
        <img src="Vector.png" alt="" className="w-[43.289px] h-[86px]" />
      </div>

      {/* Start of Sun Card */}
      <div className="h-screen w-1/2 bg-[#F3F4F6FB] flex flex-col justify-center items-center relative">
        {/* Search Bar */}
        <div className="absolute top-[20px] left-[105px] flex justify-center w-full z-30">
          <div className="absolute top-[60px] flex justify-start w-full z-30">
            <div className="w-[567px] ml-[61px] flex flex-col gap-[8px]">
              <div className="flex gap-[16px] rounded-[48px] py-[16px] px-[25px] bg-white shadow-md">
                <Search className="w-[48px] h-[48px]" />
                <input
                  type="text"
                  className="w-full text-[32px] font-[700] focus:outline-0"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setShowSuggestions(e.target.value !== "");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      console.log(searchText);
                    }
                  }}
                />
              </div>
              {showSuggestions && (
                <div className="bg-[#ffffff80] rounded-[24px] p-[16px] shadow-lg">
                  <div className="flex gap-[16px] items-center">
                    <MapPin color="gray" className="w-[24px] h-[32px]" />
                    <p className="text-[28px] font-[700]">{searchText}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="w-[414px] h-[828px] rounded-[48px] bg-white/75 shadow-2xl z-20">
          <div className="w-full flex flex-col py-[56px]">
            <p className="text-gray-400 px-[40px]">May 19th, 2025</p>
            <div className=" w-full flex px-[40px] gap-[20px]">
              <p className="text-[#111827] text-[48px] font-[800] flex">
                Ulaanbaatar
              </p>
              <MapPin className="w-[32px] h-[32px]" color="#4B5563" />
            </div>
          </div>
          {/* Sun */}
          <div className="w-[full] flex justify-center items-center">
            <img src="sun.png" className="w-[262.108px] h-[262.108px]" />
          </div>
          {/* Celsius */}
          <div className="flex flex-col px-[48px]">
            <p className="text-[144px] font-[800]">26°</p>
            <p className="text-[24px] font-[800] text-[#FF8E27]">Bright</p>
          </div>
          {/* Navigation */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[318px] mt-[48px] flex justify-between">
              <House className="w-[32px] h-[32px]" />
              <MapPin className="w-[32px] h-[32px]" />
              <Heart className="w-[32px] h-[32px]" />
              <User className="w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Start of moon */}
      <div className="h-screen w-1/2 flex justify-center items-center relative bg-[#F3F4F6]">
        <img
          src="teneg-background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Card */}
        <div className="w-[414px] h-[828px] rounded-[48px] bg-[#111827BF] shadow-2xl z-10">
          <div className="w-full flex flex-col py-[56px]">
            <p className="text-gray-400 px-[40px]">May 19th, 2025</p>
            <div className=" w-full flex px-[40px] gap-[20px]">
              <p className="text-white text-[48px] font-[800] flex">
                Ulaanbaatar
              </p>
              <MapPin className="w-[32px] h-[32px]" color="#4B5563" />
            </div>
          </div>
          {/* Moon */}
          <div className="w-[full] flex justify-center items-center">
            <img src="moon.png" className="w-[262.108px] h-[262.108px]" />
          </div>
          {/* Celsius */}
          <div className="flex flex-col px-[48px]">
            <p className="text-[144px] text-[#F9FAFB] font-[800]">26°</p>
            <p className="text-[24px] font-[800] text-[#777CCE]">Clear</p>
          </div>
          {/* Navigation */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[318px] mt-[48px] flex justify-between">
              <House className="w-[32px] h-[32px]" color="white" />
              <MapPin className="w-[32px] h-[32px]" color="white" />
              <Heart className="w-[32px] h-[32px]" color="white" />
              <User className="w-[32px] h-[32px]" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
