import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import EventBox from './eventbox.jsx';

const Events = ({events, pages, loadResults}) => {

  // const [pageNum, setPageNum] = useState(1);

    // // this will render one EventBox component for each event that comes back from the search (up to a max of 10)
  let eventBoxes = events.map((event, index) =>
    <EventBox event={event} key={index} />
  )

  // upon clicking a page number, next, or previous, calls loadResults() with the proper page number to fetch that page from the json-server
  const handlePageClick = (data) => {
    let selected = data.selected;
    loadResults(selected);
  }


  return (
    <div >
      {/* renders up to 10 discrete EventBox divs based on the events on the current 'page' of events in state */}
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
