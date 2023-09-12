/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Bookmark from '../BookMark/BookMark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div>
            <div className="md:w-1/3 lg:w-full bg-gray-300 ml-4 mt-4 pt-4 rounded-lg pb-2">
                <div>
                    <h3 className="text-4xl text-center mb-5">Reading Time: {readingTime}</h3>
                </div>
                <h2 className='text-3xl text-center  p-5 m-5 '>BookMarked Blogs: {bookmarks.length}{bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>


    );
};


Bookmarks.propType = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;