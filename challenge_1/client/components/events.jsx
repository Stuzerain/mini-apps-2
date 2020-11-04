import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import EventBox from './eventbox.jsx';

const Events = ({events, links, pages, loadResults}) => {

  // const [pageNum, setPageNum] = useState(1);

    // // this will render one EventBox component for each event that comes back from the search (up to a max of 10)
  let eventBoxes = events.map((event, index) =>
    <EventBox event={event} key={index} />
  )

  const handlePageClick = (data) => {
    let selected = data.selected;
    loadResults(selected);
  }


  return (
    <div >
      {eventBoxes}

      <ReactPaginate
      pageCount={pages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      />

    </div>
  )
}
 export default Events;
