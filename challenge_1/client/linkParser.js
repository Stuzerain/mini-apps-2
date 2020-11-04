// linkParser takes an array of links provided by json-server's pagination and returns an object with each key-value pair being one of the links
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