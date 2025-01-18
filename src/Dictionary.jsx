import React,{useState} from 'react'

const Dictionary = () => {

    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];

    // // States for search input and result
    const [searchWord, setSearchWord] = useState('');
    const [result, setResult] = useState('');

    // Handle search function
    const handleSearch = () => {
        const foundWord = dictionary.find( 
            item => item.word.toLowerCase() === searchWord.toLowerCase()
            );
            
            if(foundWord){
                setResult(foundWord.meaning);
            }else{
                setResult("Word not found in the dictionary.")
            }
    }


  return (
    <div>
      <h1>Dictionary App</h1>
      <input 
      value={searchWord}
      onChange={(e) => setSearchWord(e.target.value)}
      type="text" 
      placeholder="Search for a word..."/>

      <button
      onClick={handleSearch}
      >
        Search
      </button>
      <h4>Defination:</h4>
      
       {/* Result display */}
       {result && (
        <div>
            {result}
        </div>
       )}
    </div>
  )
}

export default Dictionary
