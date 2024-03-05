import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupClick =()=>{
    //console.log("Uppercase was clicked" +text)
    let newText=text.toUpperCase();
    setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleloClick =()=>{
    let newText1 =text.toLowerCase();
    setText(newText1)
    }
    const handleonchange=(event)=>
    {
        //console.log("on change");
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text =document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)

    }
    const handleClear=()=>
    {
        var text=document.getElementById("myBox")
        text.value=''
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}}value={text} rows="8" onChange={handleonchange}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleupClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={speak}>Speak</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black', }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text in the above textbox for preview."}</p>
    </div>
    </>
  )
}
