import React from "react";
import "./movies.css";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import SearchBar from "../general/SearchBar";
import Tag from "./Tag";

const genresList = [
    "Action", "Drama", "Comedy", "Biography", "Romance", "Thriller",
    "War", "History", "Sport", "Sci-Fi", "Documentary", "Crime", "Fantasy"
];

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
    return (
        <div className="filter-container">
            <div className="filter-left">
                <SearchBar title={title} setTitle={setTitle} />
                <div className="filters">
                    <div className="filter-item">
                        <Input label="Min Date:" type="number" value={minYear} setValue={setMinYear} className="filter-input" />
                    </div>
                    <div className="filter-item">
                        <Input label="Max Date:" type="number" value={maxYear} setValue={setMaxYear} className="filter-input" />
                    </div>
                    <div className="filter-item">
                        <SelectInput
                            label="Sort:"
                            options={[
                                { value: "latest", label: "Latest" },
                                { value: "oldest", label: "Oldest" },
                                { value: "highestrated", label: "Highest Rated" },
                                { value: "lowestrated", label: "Lowest Rated" }
                            ]}
                            value={sort}
                            setValue={setSort}
                            className="filter-input"
                        />
                    </div>
                </div>
            </div>
            <ul className="tags-container">
                {genresList.map((genre, index) => (
                    <Tag key={index} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
                ))}
            </ul>
        </div>
    );
};

export default Filter;