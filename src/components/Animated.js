import React from 'react';
import {FaCommentAlt} from 'react-icons/fa';

const Animated = () => {
    return (
        <div className='Animated'>
            <div className='container clearfix'>
                <div className=''>
                    <div className='col-ani col-ani-1'>
                        <h3>I'M EXPERT ON</h3>
                        <h1>Let's Work Together</h1>
                        <p className='para'>I have created on of project using HTML , CSS ,JAVASCRIPT . also i have created some project on react js</p>
                        <a href='' >Hide me now</a>
                    </div>
                    <div className='col-ani clearfix col-ani-2'>
                        <p>HTML5</p>
                        <div >
                            <div className='message1'><FaCommentAlt /> 95%</div>
                            <div className='skill-bar'>
                                <div style={{width:'95%'}}></div>
                            </div>
                            
                        </div>
                    </div> 
                    <div className='col-ani clearfix'>
                        <p>CSS2/3</p>
                        <div >
                            <div className='message2'><FaCommentAlt />90%</div>
                            <div className='skill-bar'>
                                <div style={{width:'90%'}}></div>
                            </div>
                            
                        </div>
                    </div> 
                    <div className='col-ani clearfix'>
                        <p>JAVASCRIPT</p>
                        <div >
                            <div className='message3'><FaCommentAlt /> 80%</div> 
                            <div className='skill-bar'>
                                <div style={{width:'80%'}}></div>
                            </div>
                            
                        </div>
                    </div> 
                    <div className='col-ani clearfix'>
                        <p>REACT.JS</p>
                        <div >
                            <div className='message4'><FaCommentAlt /> 60%</div>
                            <div className='skill-bar'>
                                <div style={{width:'60%'}}></div>
                            </div>
                            
                        </div>
                    </div> 
                    <div className='col-ani clearfix'>
                        <p>Next.js</p>
                        <div >
                            <div className='message5'><FaCommentAlt /> 60%</div>
                            <div className='skill-bar'>
                                <div style={{width:'60%'}}></div>
                            </div>
                            
                        </div>
                    </div>          
                </div>
            </div>
            
        </div>
    );
}

export default Animated;
