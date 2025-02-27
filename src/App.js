import React, { useState } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import './App.css';


function App() {
    // State variables for controlled components
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    // Options for the SelectInput
    const options = [
        { value: 'Default', label: 'Default' },
        { value: 'Lastest', label: 'Lastest' },
        { value: 'Oldest', label: 'Oldest' },
        { value: 'Highest Rated', label: 'Highest Rated' },
        { value: 'Lowest Rated', label: 'Lowest Rated' },

    ];

    // Button click handler
    const handleButtonClick = () => {
        console.log('Button clicked!');
        // You can add more logic here as needed
    };

    return (
        <div className="App">
            
            {/* Search Bar */}
            <SearchBar title={searchTitle} setTitle={setSearchTitle} />

            {/* Input Field */}
            <Input 
                label="Username" 
                type="text" 
                value={inputValue} 
                setValue={setInputValue} 
                className="custom-input-class" 
            />

            {/* Select Input */}
            <SelectInput 
                label="Sort" 
                options={options} 
                value={selectValue} 
                setValue={setSelectValue} 
                className="custom-select-class" 
            />

            {/* Button */}
            <Button 
                label="Load More" 
                onClick={handleButtonClick} 
                className="custom-button-class" 
            />
        </div>
    );
}

export default App;