import { useState } from "react";
import CarImage from "./CarImage";
import Specification from "./Specification";
import SearchBar from "./SearchBar";
import { XMLParser } from "fast-xml-parser";
import CircularProgress from '@mui/material/CircularProgress';

export default function CarDetails(){

    const [carName, setCarName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [specs, setSpecs] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch   = async (carName) => {

        const API_NINJA_API_KEY = import.meta.env.VITE_APP_API_NINJA_KEY;
        setLoading(true);
        try {
            const response = await fetch(
            `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${encodeURIComponent(carName)}`
            );

            const xmlText = await response.text();
            const parser = new XMLParser();
            const parsed = parser.parse(xmlText);
            const fetchedImageUrl = parsed?.string || '';

            setImageUrl(fetchedImageUrl);
            setCarName(carName);
            setHasSearched(true);

            const specRes = await fetch(
                `https://api.api-ninjas.com/v1/cars?model=${encodeURIComponent(carName)}`,
                {
                    headers: {
                        "X-Api-Key": API_NINJA_API_KEY,
                    },
                }
            );

            const specData = await specRes.json();
            setSpecs(specData[0] || null);

        } catch (error) {
            console.error("Error fetching car image:", error);
            setImageUrl(""); // fallback if failed
            setSpecs(null);
         }  finally{
            setLoading(false);
         }
  };

    return(
        <div>
            <div>
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onSearch={handleSearch}/>
            </div>

            {loading ? (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                    width: "100%",}}>

                    <CircularProgress />

                </div> ) : (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start' 
                    }}>
                    <CarImage name={carName} imageUrl={imageUrl} hasSearched={hasSearched}/>
                    <Specification specs={specs} hasSearched={hasSearched} />
                </div>
            )}
        </div>
    );
}