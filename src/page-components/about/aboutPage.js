import './aboutPage.css';
import { useState } from 'react';

function About() {
    const [state,setState] = useState(1)

    const [page,setPage] = useState(1)

    const active = (index) => {
        setState(index)
        setPage(1)
        console.log(index)
    }

    const activepage = (index) => {
        setPage(index)
        console.log(index)
    } 

    return <>
    <div className='About'>  
        <div className='box'>
            <div className='page-about-tabs'>
                <div onClick = {()=>active(1)} className={`${state===1 ? 'tab active-tab':'tab'}`}>History</div>
                <div onClick = {()=>active(2)} className={`${state===2 ? 'tab active-tab':'tab'}`}>Values</div>
                <div onClick = {()=>active(3)} className={`${state===3 ? 'tab active-tab':'tab'}`}>Vision</div>
                <div className='page-about-board'>
                    <div className='page-about-boardpages'>
                        <div className='page-about-history'>
                            <div className={`${state===1 && page===1 ? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>History of the Tea Party</h2>
                                <p>
                                    This is the history Page 1 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 1 of 3</p>
                                    <button className='forward' onClick = {()=>activepage(2)}>{'>'}</button>
                                </div>
                            </div>
                            
                            <div className={`${state===1 && page===2 ? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>History of the Tea Party</h2>
                                <p>
                                    This is the history Page 2 of 3
                                </p>
                                <div className = 'footer'>
                                    <p className='page-no-display'>Page 2 of 3</p>
                                    <button className='backward' onClick = {()=>activepage(1)}>{'<'}</button>
                                    <button className='forward' onClick = {()=>activepage(3)}>{'>'}</button>
                                </div>
                            </div>
                            
                            <div className={`${state===1 && page===3 ? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>History of the Tea Party</h2>
                                <p>
                                    This is the history Page 3 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 3 of 3</p>
                                    <button className='backward' onClick = {()=>activepage(2)}>{'<'}</button>
                                </div>
                            </div>
                            
                        </div>  

                        <div className='page-about-values'>
                            <div className={`${state===2 & page===1 ? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>Value of the Tea Party</h2>
                                <p>
                                    This is the values Page 1 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 1 of 3</p>
                                    <button className='forward' onClick = {()=>activepage(2)}>{'>'}</button>
                                </div>
                            </div>
                            <div className={`${state===2 & page===2 ? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>Value of the Tea Party</h2>
                                <p>
                                    This is the values Page 2 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 2 of 3</p>
                                    <button className='backward' onClick = {()=>activepage(1)}>{'<'}</button>
                                    <button className='forward' onClick = {()=>activepage(3)}>{'>'}</button>
                                </div>                                
                            </div>
                            <div className={`${state===2 & page===3 ? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>Value of the Tea Party</h2>
                                <p>
                                    This is the values Page 3 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 3 of 3</p>
                                    <button className='backward' onClick = {()=>activepage(2)}>{'<'}</button>
                                </div>                                                                
                            </div>                            
                        </div>
                        <div className='page-about-Vision'>
                            <div className={`${state===3 && page === 1? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>Vision of the Tea Party</h2>
                                <p>
                                    This is the vision Page 1 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 1 of 3</p>
                                    <button className='forward' onClick={()=>activepage(2)}>{'>'}</button>
                                </div>                                
                            </div>
                            <div className={`${state===3 && page === 2? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>Vision of the Tea Party</h2>
                                <p>
                                    This is the vision Page 2 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 2 of 3</p>
                                    <button className='backward' onClick={()=>activepage(1)}>{'<'}</button>
                                    <button className='forward' onClick={()=>activepage(3)}>{'>'}</button>
                                </div>
                            </div>
                            <div className={`${state===3 && page === 3? 'page-about-boardpage active-page':'page-about-boardpage'}`}>
                                <h2>Vision of the Tea Party</h2>
                                <p>
                                    This is the vision Page 3 of 3
                                </p>
                                <div className='footer'>
                                    <p className='page-no-display'>Page 3 of 3</p>
                                    <button className='backward' onClick={()=>activepage(2)}>{'<'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default About;
