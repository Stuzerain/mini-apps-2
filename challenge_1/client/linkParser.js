/*
linkParser takes an array of links provided by json-server's pagination and returns an object with each key-value pair being one of the links
 for example, a links response of a single messy string like: "<http://localhost:3000/events?_page=1&_limit=10&q=africa>; rel="first", <http://localhost:3000/events?_page=2&_limit=10&q=africa>; rel="next", <http://localhost:3000/events?_page=75&_limit=10&q=africa>; rel="last""

would become a much more manageable object: {
  "first":"http://localhost:3000/events?_page=1&_limit=10&q=africa",
  "next":"http://localhost:3000/events?_page=2&_limit=10&q=africa",
  "last":"http://localhost:3000/events?_page=75&_limit=10&q=africa"
}

currently, this function is not used because the pagination of the results shows the first and last page numbers, which serve the same purpose as
first and last by just using the numbers, and the next and previous buttons similarly query with the page number +/- 1

    to use linkParser, these lines can be placed back in app.jsx


      // state that will hold the links to allow scrolling through pages of results
        const [links, setLinks] = useState({});

       setLinks(linkParser(results.headers.link.split(',')));
*/

const linkParser = (linkArray) => {
  let links = {};

  for (let i = 0; i < linkArray.length; i++) {
    let linkKey = linkArray[i].substring(
      linkArray[i].lastIndexOf("rel=") + 5,
      linkArray[i].lastIndexOf('"')
    );

    let linkValue = linkArray[i].substring(
      linkArray[i].lastIndexOf("<") + 1,
      linkArray[i].lastIndexOf(">")
    );

      links[linkKey] = linkValue;

  }

  return links;
}

export default linkParser;