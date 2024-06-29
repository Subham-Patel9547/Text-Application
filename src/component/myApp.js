
import React,{useState} from 'react'
import '../CSS/myApp.css'

function MyApp() {
    var [text,setText]=useState('')
    const [wordCount, setWordCount] = useState(0);

    const TextChange=(event)=>{
        setText(event.target.value)
        const inputText = event.target.value;
        setText(inputText);

// Count total Sentence/String Total Words.....
        const words = inputText.trim().split(/\s+/);
        const count = inputText ? words.length : 0;
        setWordCount(count);      
    }

// Count total Sentence/String Characters... 
    const countCharacters = (text) => {
        return text.replace(/\s+/g, '').length;
      };
    
// Convert Sentence/String to UpperCase...
      const UpperCase=()=>{
        setText(text.toUpperCase())      
    }

// Convert Sentence/String to LowerCase...
    const LowerCase=()=>{
        setText(text.toLowerCase())      
    }

// Clear Textarea...
    const Clear=()=>{      
        setText(" ")
    }

  
    

  return (
    <>
    <div>
        <h1 className='a'>Welcome To My Text Application...</h1>
    </div>

    <div className='textAreaDiv'>
        <textarea className="textArea" rows="10" cols="120"
            placeholder="Type or paste your text here..."
          value={text} onChange={TextChange}></textarea>
    </div>

    <div className="buttonDiv">
        <button onClick={UpperCase}>UpperCase</button>
        <button onClick={LowerCase}>LowerCase</button>
        <button onClick={Clear} style={{color:'red'}}>Clear</button>
        <p>Total Character: {countCharacters(text)}</p>
        <p>Total Words: {wordCount}</p>
    </div>    
    <div>
        <h1 className='a fotter'>Copyright © 2024 All Rights Reserved | Design by Subham... </h1>
    </div>


    </>
  )
}

export default MyApp