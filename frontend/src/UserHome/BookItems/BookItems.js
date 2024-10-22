import React, { useState } from 'react';
import './BookItems.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import ShopIcon from '@material-ui/icons/Shop';
import InfoIcon from '@material-ui/icons/Info';

function BookItems({ bookName, image, author, link1, link2, link3 }) {
    // Use link2 or fallback to link3 if link2 doesn't exist
    const [link] = useState(() => (link2 ? link2 : link3));

    return (
        <div className='bookItems'>
            <div className='bookItems__top'>
                <h2>{bookName}</h2>
            </div>

            <div className="bookItems__bottom">
                <p>Author: {author}</p>
            </div>

            <div className="bookItems__image">
                {/* Fallback image if none exists */}
                <img src={image || 'https://via.placeholder.com/150'} alt={bookName} />
            </div>

            <div className='bookItems__options'>
                {/* Read Button */}
                <div className='bookItems__option'>
                    <IconButton
                        target='_blank'
                        href={link1}
                        style={{ color: 'white', fontSize: '1rem', padding: '10px 15px', borderRadius: '1px' }}>
                        <MenuBookIcon />
                        <p>Read</p>
                    </IconButton>
                </div>

                {/* Second Button (For Sale or Info) */}
                <div className='bookItems__option'>
                    <IconButton
                        target='_blank'
                        href={link}
                        style={{ color: 'white', fontSize: '1rem' }}>
                        {link2 ? (
                            <>
                                <ShopIcon />
                                <p>For Sale</p>
                            </>
                        ) : (
                            <>
                                <InfoIcon />
                                <p>Book Info</p>
                            </>
                        )}
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default BookItems;
