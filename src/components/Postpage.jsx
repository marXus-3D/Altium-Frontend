import React from 'react'
import './Postpage.css'
import FilterIcon from '@mui/icons-material/Filter';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Postpage(){
    return(<React.Fragment>
        <div className="outercontainer">
            <h3 className='home'>Home</h3>
            <div className='postSection'>
                <div className='profileImage'>
                    <img src="" alt="" />
                </div>
                <input className='caption' type="text" placeholder="What's happening"/>
            </div>
            <div className='buttons'>
                <FilterIcon />
                <GifBoxOutlinedIcon />
                <AttachmentOutlinedIcon />
                <EmojiEmotionsIcon />
                <button type="submit" className='post'>Post</button>
            </div>
            <hr />
        </div>
    </React.Fragment>)
    

}
export default Postpage