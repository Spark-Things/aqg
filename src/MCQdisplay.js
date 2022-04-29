import React from 'react';

function MCQdisplay(props) {
  return (
    <div id='questionContainer'>
      <span className='questionNumber'>{props.id} <span>.</span></span>
      <p className='question'>{props.question}</p>
      <label className='opd'>A.</label><p className='options'>{props.optionA}</p><br/>
      <label className='opd'>B.</label><p className='options'>{props.optionB}</p><br/>
      <label className='opd'>C.</label><p className='options'>{props.optionC}</p><br/> 
      <label className='opd'>D.</label><p className='options'>{props.optionD}</p> 
     </div> 
  );
}

export default MCQdisplay;
