import { House, MapPin, Heart, User, Search } from "lucide-react";
import { useState, useEffect } from "react";

const API_KEY = "a9bd50909a544a9c84172455241312";

const WeatherApp = () => {
  const [searchText, setSearchText] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [dayTemp, setDayTemp] = useState(null);
  const [nightTemp, setNightTemp] = useState(null);
  const [conditions, setConditions] = useState("");
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        const dayData = data?.forecast?.forecastday[0]?.day;
        setDayTemp(dayData?.maxtemp_c);
        setNightTemp(dayData?.mintemp_c);
        setConditions(dayData?.condition?.text);
        setTodayDate(data?.forecast?.forecastday[0]?.date);
      })
      .catch((err) => console.error("Failed to fetch weather:", err));
  }, [city]);

  return (
    <div className="flex justify-center items-center relative">
      {/* Orange & Purple Balls, Pinecone Logo (no change) */}
      {/* ... */}

      {/* Left: Day Card */}
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
                      setCity(searchText);
                      setShowSuggestions(false);
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
        <div className="w-[414px] rounded-[48px] bg-white/75 shadow-2xl z-20">
          <div className="w-full flex flex-col py-[56px]">
            <p className="text-gray-400 px-[40px]">{todayDate}</p>
            <div className=" w-full flex px-[40px] gap-[20px]">
              <p className="text-[#111827] text-[48px] font-[800] flex">
                {city}
              </p>
              <MapPin className="w-[32px] h-[32px]" color="#4B5563" />
            </div>
          </div>
          {/* Sun */}
          <div className="w-full flex justify-center items-center">
            <img src="sun.png" className="w-[262.108px] h-[262.108px]" />
          </div>
          {/* Celsius */}
          <div className="flex flex-col px-[48px]">
            <p className="text-[144px] font-[800]">
              {dayTemp ? `${dayTemp}°` : "--"}
            </p>
            <p className="text-[24px] font-[800] text-[#FF8E27]">
              {conditions}
            </p>
          </div>
          {/* Navigation */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[318px] mt-[48px] flex justify-between mb-[30px]">
              <House className="w-[32px] h-[32px]" />
              <MapPin className="w-[32px] h-[32px]" />
              <Heart className="w-[32px] h-[32px]" />
              <User className="w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Night Card */}
      <div className="h-screen w-1/2 flex justify-center items-center relative bg-[#F3F4F6]">
        <img
          src="teneg-background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="w-[414px] rounded-[48px] bg-[#111827BF] shadow-2xl z-10">
          <div className="w-full flex flex-col py-[56px]">
            <p className="text-gray-400 px-[40px]">{todayDate}</p>
            <div className=" w-full flex px-[40px] gap-[20px]">
              <p className="text-white text-[48px] font-[800] flex">{city}</p>
              <MapPin className="w-[32px] h-[32px]" color="#4B5563" />
            </div>
          </div>
          {/* Moon */}
          <div className="w-full flex justify-center items-center">
            <img src="moon.png" className="w-[262.108px] h-[262.108px]" />
          </div>
          {/* Celsius */}
          <div className="flex flex-col px-[48px]">
            <p className="text-[144px] text-[#F9FAFB] font-[800]">
              {nightTemp ? `${nightTemp}°` : "--"}
            </p>
            <p className="text-[24px] font-[800] text-[#777CCE]">Clear</p>
          </div>
          {/* Navigation */}
          <div className="w-full flex justify-center items-center mb-[30px]">
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
